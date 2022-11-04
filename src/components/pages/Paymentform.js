import React, { useEffect, useState } from 'react'; //rsc
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import toast from 'react-hot-toast'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Paymentform = ({cost, setCost}) => {
    const stripe = useStripe();
    const stripeElements = useElements();
    const [user] = useAuthState(auth)
    const [incomingSecret, setIncomingSecret] = useState('')
    useEffect(() => {
        const requestSecret = async () => {
            const { data } = await axios({
                method: 'POST',
                data: { cost: cost },
                url: `https://limitless-savannah-08553.herokuapp.com/createpayment`
            })
            setIncomingSecret(data.clientSecret)
        };
        requestSecret()
    }, [cost])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !stripeElements) {
            toast.error('something went wrong')
            return
        }
        const card = stripeElements.getElement(CardElement)
        if (!card) {
            toast.error('something went wrong')
            return
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
            billing_details: {
                name: 'John Cena',
                address: { postal_code: '90210' }
            },
        });
        if (error?.message) {
            toast.error(error.message)
            return
        }
        const { paymentIntent, error: error1 } = await stripe.confirmCardPayment(
            incomingSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: `john`,
                        email: `john@jhonmail.com`,
                        address: `Mirpur-12`,
                        phone: `+8801714565144`,
                    },
                },
            },
        );
        if (error1?.message) {
            toast.error(error1.message)
            return
        }
        //db pass
        const { data } = await axios({
            method: 'POST',
            url: 'https://limitless-savannah-08553.herokuapp.com/api/save-donation-info',
            data: {
                email: user?.email,
                transactionId: paymentIntent?.id,
                cost:cost,
                time: new Date().toString().split('').slice(0, 10).join('')
            },
        })
        if (data.acknowledged) {
            toast.success('Payment Success')
            setCost(0)
        }
    }
    return (
        <div className='w-50 mx-auto'>
        <form onSubmit={handleSubmit}>
        <CardElement className="border p-3"
            options={{
                style: {
                    base: {
                        fontSize: '20px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
        
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
            <button className="btn btn-primary mt-3" type="submit">Pay With Card</button>
            </form>
        </div>

    );

};

export default Paymentform;