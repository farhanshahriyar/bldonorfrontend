import React, { useEffect, useState } from 'react';
import {
    AiOutlineDashboard,
    AiOutlineInfoCircle,
    AiFillFlag,
  } from "react-icons/ai";
  import { IoMdPersonAdd } from "react-icons/io";
  import { GrAnnounce } from "react-icons/gr";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const EditUser = () => {
  const [userInfo, setuserInfo] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("admin-credintial")) {
      navigate("/");
    }
        const fetchdata = async()=>{
            const {data} = await axios.get('https://limitless-savannah-08553.herokuapp.com/data-info')
        // setDatainfo(data)
        setuserInfo(data.user)
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

      <div className="bg-dark" style={{ width: "100%", overflow: "auto" }}>

         
          
            
            <div className='p-3'>
            <h2 className="mb-3 mt-3 p-1 text-white">Edit User</h2>
            <table class="table table-striped bg-white">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Avatar</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">Gender</th>
                <th scope="col">Email</th>
                <th scope="col">Dob</th>
                <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
{userInfo.map((user, index)=> <tr>
    <th scope="row">
        {index+1}
    </th>
    <td>
        <img src={user.avatar} style={{height:'40px' , width:'40px'}} className='rounded-full'/>
    </td>
    <td>
        {user.userName}
    </td>
    <td>
        {user.password}
    </td>
    <td>
        {user.gender}
    </td>
    <td>
        {user.email}
    </td>
    <td>
        {user.dob}
    </td>
  
    <td>
       <button onClick={()=>navigate(`/dashboard/editinfo/${user._id}`)} className='btn btn-dark'>Edit</button>
    </td>
   </tr>)}
</tbody>
            </table>
            </div>
            
      </div>
    </div>
            
        </>

    );

};

export default EditUser;