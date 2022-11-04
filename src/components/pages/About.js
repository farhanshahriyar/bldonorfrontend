import React from 'react';
import axios from 'axios';
import { MdLocationPin, MdCall } from 'react-icons/md'
import { AiFillMail } from 'react-icons/ai'
import toast from 'react-hot-toast';
// import banner from '../../assets/banner.jpg'

const About = () => {
    const handleContact = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('https://limitless-savannah-08553.herokuapp.com/add-message', {
            message: e.target.massege.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            date: new Date().getTime(),
            name: e.target.name.value
        })
        if (data.acknowledged) {
            toast.success('Your message was successfully delivered')
        }
        else {
            toast.error('Something Went wrong with your message')
        }
        e.target.reset()
    }
    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <div className='my-2'>
            <marquee behavior="scroll" direction="left">রক্তদানের মাধ্যমে মানুষকে সাহায্য করুন, অল্প কিছু রক্তদান ব্যর্থ যাবেনা এ মহৎ দান। বিফলে যাবেনা, হবেনা নস্ট বাঁচবে একটি জীবন আস্ত।</marquee>
            </div>
            
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5170221749454!2d90.41937981429649!3d23.728935595514372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85adfae47d1%3A0xe923011c649c5aa7!2sNotre%20Dame%20University%20Bangladesh!5e0!3m2!1sen!2sbd!4v1657983484133!5m2!1sen!2sbd" style={{ border: "0", width: '100%', minHeight: '500px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="information d-flex flex-column flex-sm-row justify-content-between w-75 mx-auto my-3">
                <div className="p-4 d-flex flex-column justify-content-center align-items-center border w-100 shadow rounded-3">
                    <MdLocationPin className="fs-1"></MdLocationPin>
                    <h3 className="text-dark fw-bold my-2">ADDRESS</h3>
                    <p>2/A, Arambagh, Motijheel, Dhaka-1000, Dhaka 1000</p>
                </div>
                <div className="p-4 d-flex flex-column justify-content-center align-items-center border w-100 mx-0 mx-sm-4 my-4 my-sm-0 shadow rounded-3">
                    <MdCall className="fs-1"></MdCall>
                    <h3 className="text-dark fw-bold my-2">CALL</h3>
                    <span>+880 2-41070719,</span>
                    <span>+880 2-41070720</span>
                </div>
                <div className="p-4 d-flex flex-column justify-content-center align-items-center border w-100 shadow rounded-3">
                    <AiFillMail className="fs-1"></AiFillMail>
                    <h3 className="text-dark fw-bold my-2">MAIL</h3>
                    <p>info@ndub.edu.bd</p>
                </div>
            </div>
            <form className="w-75 mx-auto" onSubmit={handleContact}>
                <div className="form-outline mb-2">
                    <label className="form-label" htmlFor="form2Example1">Full Name</label>
                    <input type="text" placeholder="Enter your fullname" id="form2Example1" name="name" className="form-control" required />
                </div>
                <div className="form-outline mb-2">
                    <label className="form-label" htmlFor="form2Example2">Phone Number</label>
                    <input type="text" placeholder="Enter your Phone" id="form2Example2" name="phone" className="form-control" required />
                </div>
                <div className="form-outline mb-2">
                    <label className="form-label" htmlFor="form2Example3">Email</label>
                    <input type="email" placeholder="Enter your email" id="form2Example3" name="email" className="form-control" required />
                </div>
                <div className="form-outline mb-2">
                    <label className="form-label" htmlFor="form2Example4">Massege</label>
                    <textarea rows={8} type="text" placeholder="Enter your email" id="form2Example4" name="massege" className="form-control" required></textarea>
                </div>
                <button type='submit' className="btn btn-primary my-3">Submit</button>
            </form>
        </div>
    );
};

export default About;