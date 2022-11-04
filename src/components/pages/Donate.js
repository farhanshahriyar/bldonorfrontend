import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { BarWave } from "react-cssfx-loading";
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../parts/Loading';

const Donate = () => {
    const [user, loading2] = useAuthState(auth)
    const areas = ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Jamalpur', 'Satkhira', 'Narail', 'Meherpur', 'Magura', 'Kushtia', 'Khulna', 'Jhenaidah', 'Jashore', 'Chuadanga', 'Bagerhat', 'Sylhet', 'Sunamganj', 'Maulvibazar', 'Habiganj', 'Rangamati', 'Noakhali', 'Lakshmipur', 'Khagrachari', 'Feni', "Cox's Bazar", 'Cumilla', 'Chattogram', 'Chandpur', 'Brahmanbaria', 'Bandarban', 'Pirojpur', 'Patuakhali', 'Jhalokati', 'Bhola', 'Barishal', 'Barguna', 'Thakurgaon', 'Rangpur', 'Panchagarh', 'Nilphamari', 'Lalmonirhat', 'Kurigram', 'Gaibandha', 'Dinajpur', 'Sirajgonj', 'Rajshahi', 'Pabna', 'Nawabganj', 'Natore', 'Naogaon', 'Joypurhat', 'Bogura', 'Tangail', 'Sherpur', 'Shariatpur', 'Rajbari', 'Netrokona', 'Narsingdi', 'Kishoreganj', 'Narayanganj', 'Mymensingh', 'Munshiganj', 'Manikganj', 'Madaripur']
    const [loading, setLoading] = useState(false)
    const handleDonate = async (e) => {
        e.preventDefault()
        setLoading(true)
        const { data: getgender } = await axios({
            method: 'GET',
            url: `https://limitless-savannah-08553.herokuapp.com/get-gender?email=${user.email}`
        })
        const { data } = await axios.post('https://limitless-savannah-08553.herokuapp.com/donate', {
            gender: getgender.gender,
            name: e.target.name.value,
            number: e.target.number.value,
            age: e.target.age.value,
            hospital: e.target.hospital.value,
            available: e.target.available.value,
            message: e.target.message.value,
            email: user.email,
            img: user.photoURL,
            total: e.target.total.value,
            last: e.target.last.value,
            height: e.target.height.value,
            weight: e.target.weight.value,
            link: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239086815!2d90.27923710646989!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1654447589506!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`,
            area: e.target.area.value,
            blood: e.target.blood.value,
            date: format(new Date(), 'PP')
        })
        if (data.acknowledged) {
            Swal.fire({
                title: 'Success',
                text: 'Successfully added your info to donation list',
                icon: 'success',
                showClass: {
                    popup: 'animate__animated animate__rollIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__rollOut'
                },

            })
        }
        else {
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong',
                icon: 'error',
                showClass: {
                    popup: 'animate__animated animate__rollIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__rollOut'
                },

            })
        }
        setLoading(false)
        e.target.reset()
    }
    if (loading2) {
        return <Loading />
    }
    return (
        <div style={{ minHeight: '600px' }} className="p-3">

            <form onSubmit={handleDonate}>
                <div className="row row-cols-3">
                    <div className="mb-3 col">
                        <label className="form-label" htmlFor="form2Example1">Name</label>
                        <input type="text" id="form2Example1" className="form-control" style={{ backgroundColor: '#F5F5F5' }} placeholder="Enter your name" name='name' required />
                    </div>

                    <div className="mb-3 col">
                        <label className="form-label" htmlFor="inputGroupSelect01">Blood Group</label>
                        <select className="form-select" id="inputGroupSelect01" required defaultValue={``} name="blood" style={{ backgroundColor: '#F5F5F5' }}>
                            <option value="" disabled>Choose your blood group</option>
                            <option value='APlus'>A+</option>
                            <option value='AMinus'>A-</option>
                            <option value='BPlus'>B+</option>
                            <option value='BMinus'>B-</option>
                            <option value='OPlus'>O+</option>
                            <option value='0Minus'>O-</option>
                            <option value='ABPlus'>AB+</option>
                            <option value='ABMinus'>AB-</option>
                        </select>
                    </div>

                    <div className="mb-3 col">
                        <label className="form-label" htmlFor="form2Example5">Area</label>
                        <select defaultValue="" id="form2Example5" name='area' style={{ backgroundColor: '#F5F5F5' }} required className="form-select">
                            <option value="" disabled>Select Your Area</option>
                            {areas.map(area => <option value={area}>{area}</option>)}
                        </select>
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label " htmlFor="form2Example3">Phone Number</label>
                        <input type="tel" placeholder="Enter your phone" id="form2Example3" className="form-control" style={{ backgroundColor: '#F5F5F5' }} required name="number" />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label " htmlFor="form2Example4">Age</label>
                        <input type="number" placeholder="Enter your age" id="form2Example4" className="form-control" style={{ backgroundColor: '#F5F5F5' }} name="age" required />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label " htmlFor="form2Example6">Hospital Name</label>
                        <input type="text" placeholder="Enter Hospital Name" id="form2Example6" className="form-control" style={{ backgroundColor: '#F5F5F5' }} name="hospital" required />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label " htmlFor="form423Example423">Weight (in kg)</label>
                        <input type="number" placeholder="Enter Your Weight" id="form423Example423" className="form-control" style={{ backgroundColor: '#F5F5F5' }} name="weight" required />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label " htmlFor="form423Example4235">Height (in ft)</label>
                        <input type="number" placeholder="Enter Your Height" id="form423Example4235" className="form-control" style={{ backgroundColor: '#F5F5F5' }} name="height" required />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label " htmlFor="form423Example4233">Available to donate</label>
                        <input type="date" placeholder="Enter Your Donate date" id="form423Example4233" className="form-control" style={{ backgroundColor: '#F5F5F5' }} name="available" required />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label" htmlFor="form423Example42331">Last donate</label>
                        <input type="date" placeholder="Enter Your Last Donate date" id="form423Example42331" className="form-control" style={{ backgroundColor: '#F5F5F5' }} name="last" required />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label" htmlFor="form423E3xample42331">Total donate</label>
                        <input type="number" placeholder="Enter Your Total donate" id="form423E3xample42331" className="form-control" style={{ backgroundColor: '#F5F5F5' }} name="total" required />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label" htmlFor="form423E3xample42332">Additional Message</label>
                        <textarea placeholder='Enter Your Additional Message' name="message" className="w-100 form-control" rows={3} id="form423E3xample42332" style={{ backgroundColor: '#F5F5F5', resize: 'none' }} required></textarea>
                    </div>
                </div>
                <button style={{ marginTop: '-96px', width: '66%' }} className="btn btn-dark" type='submit'>Donate Now</button>
                {loading &&
                    <div style={{ display: 'flex', justifyContent: 'center' }} className="my-4">
                        <BarWave color="#FF0000" width="100px" height="20px" duration="1s" />
                    </div>
                }
            </form>

        </div>
    );
};

export default Donate;