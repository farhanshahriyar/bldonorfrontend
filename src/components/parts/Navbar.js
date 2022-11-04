import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import donation from '../../assets/donation.jpg'
import logo from '../../assets/Logo.png';


const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
    const navigate = useNavigate()
    const handleSignOut = async (e) => {
        Swal.fire({
            text: 'Are you sure you want to sign out?',
            icon: 'question',
            title: "SignOut",
            showCancelButton: true,
            showClass: {
                popup: 'animate__animated animate__zoomIn'
            },
            hideClass: {
                popup: 'animate__animated animate__zoomOut'
            },
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then(result => {
            if (result.isConfirmed) {
                signOut(auth)
                navigate('/')
            }
        })
    }
    const [user, loading] = useAuthState(auth)
    console.log(user);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ zIndex: 10, position: 'fixed', left: '0', top: '0', right: '0' }}>
            <div className="container-fluid text-white">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src={logo} alt="" width="40" height="40" />
                    <span>BlDonor</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-evenly align-items-center border-start" style={{ width: '100%' }}>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a href='https://bldonorchat.netlify.app/' target='_blank' className="nav-link">BlDonor Messanger</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/request" className="nav-link">Find Blood</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/donate" className="nav-link">Donate</Link>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link hover"><span>Donating Tips</span>
                                <div className="position-absolute bg-white dropdown">
                                    <div>
                                        <h4 className="fw-bold text-dark">How to donate</h4>
                                        <p><Link to="/donation">Donate Us</Link></p>
                                        <p><Link to="/typedonation">Types of donation</Link></p>
                                        <p><Link to="/commonconcern">Common Concern</Link></p>
                                        
                                    </div>
                                    <div>
                                        <h4 className="fw-bold text-dark">Blood Donation Process</h4>
                                        <p>Donation Process Overview</p>
                                        <p>What Happens to Donate Dlood</p>
                                        <p>What to do Before, During and After</p>
                                    </div>
                                    <div>
                                        <h4 className="fw-bold text-dark">Ways to Donate</h4>
                                        <p><Link to="/donation">Donate Us Online</Link></p>
                                        <p>Make monthly gift</p>
                                        <p>Where Money Goes</p>
                                    </div>
                                    <div>
                                        <h4 className="fw-bold text-dark">Other Ways to Donate</h4>
                                        <p><Link to="/donation">Online Pay</Link></p>
                                        <p>Donate a Vehicle</p>
                                        <p>Donate a Bike</p>
                                    </div>
                                    <div>
                                        <img src={donation} alt="" className="w-100 h-100" />
                                    </div>
                                </div></div>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        {!user ? <>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        </>
                            : <div>
                                
                                <li className="nav-link position-relative" style={{ cursor: 'pointer' }}>
                                
                                    <div>
                                        <img onClick={(e) => {
                                            e.stopPropagation()
                                            setDropdown(!dropdown)
                                        }} src={user.photoURL ? user.photoURL : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" className='rounded-full' width="50px" height="50px" />
                                    </div>

                                    <div className={`position-absolute ${!dropdown && 'd-none'} bg-light`} style={{ zIndex: 10, width: '384px', left: '-262px', color: 'black', padding: '20px' }}>
                                        <hr />
                                        <div><h6><strong>User Name</strong></h6>
                                            <p>{user.displayName}</p></div>
                                        <hr />
                                    
                        
                                    
                                        <button onClick={handleSignOut} className="w-100 btn btn-danger">Logout</button>
                                    </div>
                                      
                                </li>
                                
                            </div>}

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;