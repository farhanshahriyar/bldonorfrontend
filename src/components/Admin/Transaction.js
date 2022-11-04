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




const Transcation = () => {

  const [userInfo, setuserInfo] = useState([])
  const [donationInfo, setdonationInfo] = useState([])
  const [bloodInfo, setbloodInfo] = useState([])
  const [totalDonation, settotalDonation] = useState(0)
const navigate = useNavigate();
useEffect(() => {
  if (!localStorage.getItem("admin-credintial")) {
    navigate("/");
  }
      const fetchdata = async()=>{
          const {data} = await axios.get('https://limitless-savannah-08553.herokuapp.com/data-info')
      // setDatainfo(data)
      console.log(data)
      settotalDonation(data.donation.reduce(((acc , pre)=> acc + pre.cost),0))
      setuserInfo(data.user)
      setbloodInfo(data.blood)
      setdonationInfo(data.donation)
      }
      
      fetchdata()
}, []);
console.log(userInfo)



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
                  <p><Link to='/dashboard/adduser' className="p-3  text-decoration-none">Add User</Link></p>
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


        <div class="col">
          <div class="p-3 border bg-light">
            <h3>Latest Transactions</h3>
              {donationInfo.slice(-3).reverse().map((donate, index) =>
                <div key={index} className='border  p-2 rounded-3 my-2 bg-light'>
                  <span><b>UserNo : </b> {index + 1}</span>
                  <br></br>
                  <span><b>UserID : </b> {donate._id}</span>
                  <br></br>
                  <span><b>OrderID : </b>{donate.transactionId}</span>
                  <br></br>
                  <span><b>UserMail : </b>{donate.email}</span>
                  <br></br>
                  <span><b>Amount : </b>{donate.cost}</span>
                  <br></br>
                  <span><b>Date : </b>{donate.time}</span>
                </div>
              )}
          </div>
        </div>








      </div>

    </>

  );

};

export default Transcation;