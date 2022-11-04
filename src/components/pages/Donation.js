import React, { useEffect, useRef, useState } from 'react'; //rsc
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import toast from 'react-hot-toast'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Paymentform from './Paymentform';




const Donation = () => {
    const inputRef= useRef()
    const [stripePromise, setStripePromise] = useState(() => loadStripe(`pk_test_51LSmPNKWZke1s2bsogxmHB5Wut8P1GGpYs56kw41zxGiooPBZiGim3w4KwGLdEW9LH1GPygcC8YdQXYWbcUTqdqK00BWkZcUV7`));
    const [cost, setCost]=useState(0)
    return (
        <>
            <h1 className='text-center fw-bold mb-4 mt-3'>My Donation</h1>
            <div className='w-50 mx-auto'>
                <h5 className='mt-3'>I want to give</h5>
                <div class="d-flex gap-3">
                    <button onClick={()=>setCost(50)} className={`btn ${cost === 50 ? 'btn-light' : 'btn-primary' }`} type="button">50$</button>
                    <button onClick={()=>setCost(100)} className={`btn ${cost === 100 ? 'btn-light' : 'btn-primary' }`} type="button">100$</button>
                    <button onClick={()=>setCost(200)} className={`btn ${cost === 200 ? 'btn-light' : 'btn-primary' }`} type="button">200$</button>
                    <button onClick={()=>setCost(300)} className={`btn ${cost === 300 ? 'btn-light' : 'btn-primary' }`} type="button">300$</button>
                    <button onClick={()=>setCost(500)} className={`btn ${cost === 500 ? 'btn-light' : 'btn-primary' }`} type="button">500$</button>
                    <button onClick={()=>setCost(1000)} className={`btn ${cost === 1000 ? 'btn-light' : 'btn-primary' }`} type="button">1000$</button>
                    <div style ={{width:'30%'}} class="input-group mb-1">
                        <span class="input-group-text">$</span>
                        <input ref={inputRef} type="number" class="form-control" placeholder='Amount' aria-label="Amount (to the nearest dollar)"/>
                        <button onClick={()=> setCost(Number(inputRef.current.value))} className='btn btn-primary'>Set</button>
                    </div>
                </div>
                <p className='mt-2'> $10 is the minimum online donation. All donations are tax deductible. </p>
            </div>
            <hr></hr>
            
            
          {
              cost>0 ? <div className='text-center mb-5'> 
              <h1 className='text-center fw-bold mb-4 mt-3'>Payment Information</h1>            
                   <Elements stripe={stripePromise}>
                      <Paymentform cost={cost} setCost={setCost}/>
                  </Elements>
              
              </div> : <p className='text-center text-danger'>Select your amount to pay</p>
          }
            
                
            
        </>

    );

};

export default Donation;