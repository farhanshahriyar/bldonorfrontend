import React, { useEffect, useState } from 'react';
import {
    AiOutlineDashboard,
    AiOutlineInfoCircle,
    AiFillFlag,
  } from "react-icons/ai";
  import { IoMdPersonAdd } from "react-icons/io";
  import { GrAnnounce } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { BarWave } from "react-cssfx-loading";
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2';
import Loading from '../parts/Loading';
import toast from 'react-hot-toast';
import axios from 'axios';




const AddUser = () => {

    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [initUser, loading1] = useAuthState(auth)
    useEffect(() => {
        if (initUser) {
            navigate('/dashboard')
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
                    navigate('/dashboard')
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
        <>
             <div className="d-flex" style={{ height: "100vh", overflow: "hidden" }}>
      <div
        className="d-flex flex-column bg-light p-3"
        style={{ width: "320px", overflow: "auto" }}
      >
        <p> <Link to='/dashboard' className="p-3 border d-flex align-items-center gap-2 text-decoration-none">
          <AiOutlineDashboard />
          Dashboard
          </Link></p>
        <div class="accordion mb-3" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Donor Collection Details
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p><Link to='/dashboard/adduser'  className="p-3  text-decoration-none">Add User</Link></p>
                <p><Link to='/dashboard/edituser' className="p-3  text-decoration-none">Edit User</Link></p>
                <p><Link to='/dashboard/removeuser' className="p-3  text-decoration-none">Remove User</Link></p>
              </div>
            </div>
          </div>
        </div>
        
        
        <p className="p-3 border d-flex align-items-center gap-2">
          <GrAnnounce />
          Transactions
        </p>
      </div>

      <div className="bg-light" style={{ width: "100%", overflow: "auto" }}>
          
      <div className="p-3" style={{marginTop:'50px', marginBottom:'50px'}}>
            <h2 className="mb-3">Add User</h2>

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
                    <button type="submit" className="btn btn-dark btn-block d-block mb-4 py-3 my-3 px-4" style={{ width: '310px' }}>Add User</button>
                

                </div>


            </form>
            {(loading || updating) &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <BarWave color="#FF0000" width="100px" height="20px" duration="1s" />
                </div>
            }
        </div>
       


      
      </div>
    </div>
            
        </>

    );

};

export default AddUser;