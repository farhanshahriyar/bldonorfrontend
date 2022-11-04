import React from 'react';
import logo from '../../assets/Logo.png'
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { BiRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="bg-dark p-5">
            <div className="d-flex text-white flex-column flex-sm-row">
                <div className="d-flex flex-column mb-3">
                    <img src={logo} alt="" width={64} height={64} />
                    <div className="d-flex align-items-center">
                        <FaFacebookSquare className="fs-2 me-3"></FaFacebookSquare><a href="https://www.facebook.com/Bl-donar-100450612777336/" target="_blank" rel="noreferrer" className='text-decoration-none text-white'>Bldonor</a>
                    </div>
                    <div className="d-flex align-items-center my-3">
                        <BsYoutube className="fs-2 me-3"></BsYoutube><a href="https://www.facebook.com" target="_blank" rel="noreferrer" className='text-decoration-none text-white'>Bldonor</a>
                    </div>
                    <div className="d-flex align-items-center">
                        <FaTwitterSquare className="fs-2 me-3"></FaTwitterSquare><a href="https://www.facebook.com" target="_blank" rel="noreferrer" className='text-decoration-none text-white'>Bldonor</a>
                    </div>
                </div>
                <div className="w-100 mx-sm-5 mx-0">
                    <h3>Resources</h3>
                    <hr />
                    <p><BiRightArrow></BiRightArrow> <span><Link to='/' className='text-decoration-none text-white'>News</Link></span></p>
                    <p><BiRightArrow></BiRightArrow> <span><Link to='/' className='text-decoration-none text-white'>Articles</Link></span></p>
                    <p><BiRightArrow></BiRightArrow> <a href='https://bldonorchat.netlify.app/' target='_blank' className='text-decoration-none text-white'>BlDonor Messanger</a></p>
                    <p><BiRightArrow></BiRightArrow> <span><Link to='/about' className='text-decoration-none text-white'>Connect Us</Link></span></p>


                </div>
                <div className="w-100 mx-sm-5 mx-0">
                    <h3>General</h3>
                    <hr />
                    <p><BiRightArrow></BiRightArrow> <span><Link to='/donation' className='text-decoration-none text-white'>Donate us</Link></span></p>
                    <p><BiRightArrow></BiRightArrow> <span><Link to='/request' className='text-decoration-none text-white'>Find Blood?</Link></span></p>
                    <p><BiRightArrow></BiRightArrow> <span><Link to='/faq' target='_blank' className='text-decoration-none text-white'>FAQs</Link></span></p>
                </div>
            </div>
            <p className="text-center p-0 mt-3 text-white">Copyright &#169; Bldonor {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;