import React, { useEffect, useState } from 'react';
import {
    AiOutlineDashboard,
    AiOutlineInfoCircle,
    AiFillFlag,
  } from "react-icons/ai";
  import { IoMdPersonAdd } from "react-icons/io";
  import { GrAnnounce } from "react-icons/gr";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { BarWave } from "react-cssfx-loading";
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2';
import Loading from '../parts/Loading';
import toast from 'react-hot-toast';
import axios from 'axios';
import { async } from '@firebase/util';




const EditInfo = () => {
    const [user, setUser] = useState(null)
    console.log(user)
    const {userid} = useParams()
    useEffect(()=>{
        const getUser = async()=>{
            const {data}= await axios.get(`https://limitless-savannah-08553.herokuapp.com/getsingleuser?userid=${userid}`)
            setUser(data)

        }
        getUser()
    },[userid])

    function Update(id) {
      console.log(id)
    }


    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [initUser, loading1] = useAuthState(auth)
    useEffect(() => {
        if (initUser) {
            navigate('/edituser')
        }
    }, [initUser])

    
  
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
            <h2 className="mb-3">Edit Info User</h2>

            <form onSubmit={(e)=>{
                e.preventDefault()
                // username, email, gender, phone, dob
                console.log(e.target.username.value, e.target.email.value, e.target.gender.value, e.target.phone.value, e.target.dob.value)
                const editinfo = async()=> {
                    const {data}= await axios.put(`https://limitless-savannah-08553.herokuapp.com/edituser?${user._id}`,{
                        userName: e.target.username.value,
                        email: e.target.email.value,
                       gender: e.target.gender.value,
                        phone: e.target.phone.value,
                        dob: e.target.dob.value,
                        id: user._id
                    })
                    if (data.acknowledged){
                      toast.success("User Updated Successfully")
                      navigate("/dashboard/edituser")
                    }
                }
                editinfo()
            }}>
                <div className="row row-cols-3">
                    <div className="form-outline mb-4 col">
                        <label className="form-label" htmlFor="form2Example50">Username</label>
                        <input defaultValue={user?.userName} type="text" id="form2Example50" className="form-control" placeholder="Enter your username" name="username" style={{ backgroundColor: '#F5F5F5' }} />
                    </div>
                    <div className="form-outline mb-4 col">
                        <label className="form-label" htmlFor="form2Example2">Email address</label>
                        <input defaultValue={user?.email} type="email" id="form2Example2" className="form-control" placeholder="Enter your email" name="email" required style={{ backgroundColor: '#F5F5F5' }} />
                    </div>
                    <div className="form-outline mb-3 col">
                        <label className="form-label" htmlFor="inputGroupSelect10">Gender</label>
                        <select defaultValue={user?.gender} className="form-select" id="inputGroupSelect10" name="gender" style={{ backgroundColor: '#F5F5F5' }}>
                            <option value="" disabled>Choose your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="transgender">Transgender</option>
                        </select>
                    </div>
                    <div className="form-outline mb-4 col">
                        <label className="form-label" htmlFor="form2Example53">Phone</label>
                        <input defaultValue={user?.phone} type="text" id="form2Example53" className="form-control" placeholder="Enter your phone number" name='phone' required style={{ backgroundColor: '#F5F5F5' }} />
                    </div>
                    <div className="form-outline mb-4 col">
                        <label className="form-label" htmlFor="form2Example54">Date of birth</label>
                        <input defaultValue={user?.dob} type="date" id="form2Example54" className="form-control" placeholder="Enter your phone number" name='dob' required style={{ backgroundColor: '#F5F5F5' }} />
                    </div>
                </div>
                <div className="d-flex align-items-center gap-4">
                    <button type="submit" className="btn btn-dark btn-block d-block mb-4 py-3 my-3 px-4" style={{ width: '310px' }}>Update User</button>
                </div>
            </form>
        </div>
      </div>
    </div>
            
        </>

    );

};

export default EditInfo;