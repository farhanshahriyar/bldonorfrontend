import React from 'react';
import icon from './../../assets/1234347.png';
import { FaUserAlt, FaShareAltSquare } from 'react-icons/fa'
import { AiFillEye } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const SingleRequest = ({ req }) => {
    const { name, gender, hospital, link, area, age, date, blood, available, message, img, _id } = req;
    const navigate = useNavigate()
    return (
        <div className="card-group mb-5" style={{ width: '96%', margin: 'auto' }}>
            <div className="card col bg-light shadow-lg" style={{ borderRadius: '25px' }}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <img src={icon} alt="" height='50px' />
                            <div className="ms-3">
                                <h4>Blood Request</h4>
                                <h5><span className='fw-bold'>Fullfilled</span>: <span className="">{hospital}</span></h5>
                            </div>
                        </div>
                        <div>
                            <span style={{ color: 'gray' }}>
                                Posted on : {date}
                            </span>
                        </div>
                    </div>
                    <div>
                        <iframe title='google-map' src={link} width="100%" height="270" frameBorder="0" style={{ border: "0" }}></iframe>
                    </div>
                    <h1>Donator Details</h1>
                    <div className="d-flex">
                        <div className="d-flex align-items-center w-50">
                            {img ? <img src={img} height="48px" width="48px" alt="" /> : <FaUserAlt style={{ height: '48px', width: '48px' }}></FaUserAlt>}
                            <div className="ms-3">
                                <h2>{name}</h2>
                                <h5>Blood Group : {blood === 'APlus' && 'A+'}{blood === 'AMinus' && 'A-'}{blood === 'BPlus' && 'B+'}{blood === 'BMinus' && 'B-'}{blood === 'ABPlus' && 'AB+'}{blood === 'ABMinus' && 'AB-'}{blood === 'OPlus' && '0+'}{blood === 'OMinus' && '0-'}</h5>
                                <h5>Gender : {gender}</h5>
                                <h5>Age : {age}</h5>
                                <h5>Area : {area}</h5>
                                <h5>Available to donate : {available}</h5>
                            </div>
                        </div>
                        <div className="w-50 d-flex justify-content-end align-items-center">
                            <button className="btn btn-dark" onClick={() => navigate(`/donation-info/${_id}`)}>View More <AiFillEye /></button>
                        </div>
                    </div>
                    <p>{message}</p>
                </div>
            </div>
        </div >
    );
};

export default SingleRequest;