import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineInfoCircle,
  AiFillFlag,
} from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import axios from 'axios';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
import auth from "../../firebase.init";


const Dashboard = () => {
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
        
        <p><Link to='/dashboard/transaction' className="p-3 border d-flex align-items-center gap-2 text-decoration-none">
        <GrAnnounce />
          Transactions
        </Link>
          
        </p>
        <p onClick={handleSignOut} className="p-3 border d-flex align-items-center gap-2">
          <AiFillFlag />
          Logout
        </p>
        <p className="p-3 border d-flex align-items-center gap-2">
          <AiFillFlag />
          Update System
        </p>
      </div>

      <div className="bg-dark" style={{ width: "100%", overflow: "auto" }}>
          <div className="d-flex mt-5">
        <div className="featuredItem">
          <span className="text-dark">Total Available Bloods</span>
          <div className="featuredMoneyContainer">
            <span className="text-dark fw-bold fs-4">{bloodInfo.length}</span>
            <span className="featuredMoneyRate">
              {/* -11.4 <ArrowDownward  className="featuredIcon negative"/> */}
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
          <span className="text-dark">Total Users</span>
          <div className="featuredMoneyContainer">
            <span className="text-dark fw-bold fs-4">{userInfo.length}</span>
            <span className="featuredMoneyRate">
              {/* -1.4 <ArrowDownward className="featuredIcon negative"/> */}
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
          <span className="text-dark">Total Donation Received</span>
          <div className="featuredMoneyContainer">
            <span className="text-dark fw-bold fs-4">${totalDonation}</span>
            <span className="featuredMoneyRate">
              {/* +2.4 <ArrowUpward className="featuredIcon"/> */}
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
        </div>
       


        <div class="container overflow-hidden mt-3">
        <div class="row gx-3">
            <div class="col">
            <div class="p-3 border bg-light">
                <h3>New Join Members</h3>
                {userInfo.slice(-10).reverse().map((user, index)=> <div key={index} className='d-flex align-items-center gap-4 p-1 rounded-3 my-2'>
                        <img src={user.avatar} style={{width:'50px' , height:'50px'}} className='rounded-full'/>
                        <div className="d-flex flex-column my-2">
                            <span>{user.userName}</span>
                            <span>{user.phone}</span>
                        </div>
                    </div>
                )}
            </div>
                
            </div>
            <div class="col">
            <div class="p-3 border bg-light">
              <h3>Latest Transactions</h3>
              {donationInfo.slice(-5).reverse().map((donate, index)=> <div key={index} className='border  p-1 rounded-3 my-2'>
              

                            <span><b>UserNo : </b> {index+1}</span>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
