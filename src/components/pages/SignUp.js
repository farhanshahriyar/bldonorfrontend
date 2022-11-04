import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { BarWave } from "react-cssfx-loading";
import { Link, useNavigate } from 'react-router-dom';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2';
import Loading from '../parts/Loading';
import toast from 'react-hot-toast';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [initUser, loading1] = useAuthState(auth)
    useEffect(() => {
        if (initUser) {
            navigate('/')
        }
    }, [initUser])
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [url, setUrl] = useState('')
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDob] = useState('')
    const handleSignUp = async (e) => {
        e.preventDefault();
        if (e.target.password.value !== e.target.confirm.value) {
            Swal.fire({
                title: 'Error',
                text: 'Confirm password did not matched',
                icon: 'error',
                showClass: {
                    popup: 'animate__animated animate__rollIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__rollOut'
                },

            })
            return
        }
        const formdata = new FormData();
        const image = e.target.image.files[0]
        const name = e.target.image.files[0].name
        formdata.append('image', image, name)
        const upload = await axios.post('https://api.imgbb.com/1/upload?key=28f7e689e78cbdf683b41d414ebda692', formdata)
        if (upload.data.success) {
            setUrl(upload.data.data.display_url)
            await createUserWithEmailAndPassword(e.target.email.value, e.target.password.value)
        }
        else {
            toast.error('Something went wrong')
        }
    }
    useEffect(() => {
        if (error) {
            Swal.fire({
                title: 'Error',
                text: error.message,
                icon: 'error',
                showClass: {
                    popup: 'animate__animated animate__rollIn'
                },
                hideClass: {
                    popup: 'animate__animated animate__rollOut'
                },

            })
        }
    }, [error])
    useEffect(() => {
        if (user) {
            const saveUserToDB = async () => {
                const { data } = await axios({
                    method: 'POST',
                    url: 'https://limitless-savannah-08553.herokuapp.com/add-user',
                    data: {
                        email: user.user.email,
                        userName: userName,
                        password: password,
                        avatar: url,
                        gender: gender,
                        dob: dob,
                        phone: phone,
                        admin: false,
                    }
                })
                await updateProfile({ displayName: userName, photoURL: url })
                if (data.acknowledged) {
                    navigate('/')
                    toast.success('Successfully Registered')
                }
                else {
                    toast.error('Something went wrong')
                }
            }
            saveUserToDB()
        }
    }, [user])
    if (loading1) {
        return <Loading></Loading>
    }
    return (
        <div className="p-3">
            <h2 className="mb-3">Sign Up</h2>

            <form onSubmit={handleSignUp}>
                <div className="row row-cols-3">
                    <div className="form-outline mb-4 col">
                        <label className="form-label" htmlFor="form2Example31">Avatar</label>
                        <input type="file" name='image' id="form2Example31" className="form-control" required style={{ backgroundColor: '#F5F5F5' }} />
                    </div>
                    <div className="form-outline mb-4 col">
                        <label className="form-label" htmlFor="form2Example50">Username</label>
                        <input type="text" id="form2Example50" className="form-control" placeholder="Enter your username" onChange={(e) => setUserName(e.target.value)} required style={{ backgroundColor: '#F5F5F5' }} />
                    </div>
                    <div className="form-outline mb-4 col">
                        <label className="form-label" htmlFor="form2Example2">Email address</label>
                        <input type="email" id="form2Example2" className="form-control" placeholder="Enter your email" name="email" required style={{ backgroundColor: '#F5F5F5' }} />
                    </div>
                    <div className="form-outline mb-3 col">
                        <label className="form-label" htmlFor="inputGroupSelect10">Gender</label>
                        <select className="form-select" id="inputGroupSelect10" onChange={(e) => setGender(e.target.value)} required defaultValue={``} name="gender" style={{ backgroundColor: '#F5F5F5' }}>
                            <option value="" disabled>Choose your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="transgender">Transgender</option>
                        </select>
                    </div>
                    <div className="form-outline mb-4 col">
                        <label className="form-label" htmlFor="form2Example53">Phone</label>
                        <input type="text" id="form2Example53" className="form-control" placeholder="Enter your phone number" required style={{ backgroundColor: '#F5F5F5' }} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-outline mb-4 col">
                        <label className="form-label" htmlFor="form2Example54">Date of birth</label>
                        <input type="date" id="form2Example54" className="form-control" placeholder="Enter your phone number" required style={{ backgroundColor: '#F5F5F5' }} onChange={(e) => setDob(e.target.value)} />
                    </div>

                    <div className="form-outline mb-4 col">
                        <label className="form-label" htmlFor="form2Example3">Password</label>
                        <input type={`${show ? 'text' : 'password'}`} id="form2Example3" className="form-control" required placeholder="Password" style={{ backgroundColor: '#F5F5F5' }} onChange={(e) => setPassword(e.target.value)} name="password" />
                    </div>
                    <div className="form-outline mb-2 col">
                        <label className="form-label" htmlFor="form2Example4">Confirm Password</label>
                        <input type={`${show ? 'text' : 'password'}`} placeholder="Confirm Password" id="form2Example4" className="form-control" required name="confirm" style={{ backgroundColor: '#F5F5F5' }} />
                    </div>
                    <div className="d-flex mb-4 col align-items-center col">
                        <input type="checkbox" id='checkbox' style={{ cursor: 'pointer' }} onChange={() => setShow(!show)} />
                        <label htmlFor="checkbox" className="mx-1">Show Password</label>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                    <button type="submit" className="btn btn-dark btn-block d-block mb-4 py-3 my-3 px-4" style={{ width: '310px' }}>Sign Up</button>
                    <div className="text-center">
                        <p>Already User? <Link to='/login' className="text-decoration-none">Login</Link> Now. </p>
                    </div>

                </div>


            </form>
            {(loading || updating) &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <BarWave color="#FF0000" width="100px" height="20px" duration="1s" />
                </div>
            }
        </div>
    );
};

export default SignUp;