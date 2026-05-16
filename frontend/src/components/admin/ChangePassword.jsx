import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import AdminHeader from './AdminHeader'



const ChangePassword = () => {
    const email=localStorage.getItem("adminEmail");
    const APIURL=`http://localhost:8080/admin/updatePassword/${email}`
    const navigate=useNavigate();

    const[passwordData,setPasswordData]=useState({
        oldpass:"",
        newpass:"",
        confirmpass:""
    })

    const fillData=(e)=>{
        setPasswordData({...passwordData,[e.target.name]:e.target.value})
    }
 const submitData = async (e) => {
    e.preventDefault();
    try {
      const serverResponse = await axios.post(APIURL, passwordData);
      Swal.fire(serverResponse.data);
      navigate("/aD");
    } catch (error) {
      console.log(error);
      Swal.fire("Something went wrong. Please try again.");
    }
  };

  return (
    <>
    <AdminHeader/>
    <div className='main-div'>
        <div className='w-25 mx-auto'>
            <form onSubmit={submitData}>
                <div className='mb-4'>
                    <label htmlFor="oldpass">Old Password</label>
                    <input type="text" name="oldpass" value={passwordData.oldpass} required  
                    onChange={fillData}
                    
                    className='form-control'/>
                    
                     
                </div>
                 <div className='mb-4'>
                    <label htmlFor="newpass">New Password</label>
                    <input type="text" name="newpass" value={passwordData.newpass} required
                    onChange={fillData} 
                    className='form-control'/>
                    
                     
                </div>
                <div className='mb-4'>
                    <label htmlFor="confirmpass">Confirm Password</label>
                    <input type="text" name="newpass" value={passwordData.confirmpass} required
                    onChange={fillData} 
                    className='form-control'/>
                    
                     
                </div>
                
                <div className='text-center'>
                    <button className='btn btn-danger'>Edit Profile</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default ChangePassword