import React from 'react'
import UserHeader from './UserHeader'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Footer from '../common/Footer'


const UserEditProfile = () => {

  const email=localStorage.getItem("useremail");
  const EDITAPIURL=`http://localhost:8080/user/userEditProfile/${email}`
  const APIURL=`http://localhost:8080/user/userProfile/${email}`
 const [userData,setUserData]=useState(
  {
    name:"",
    phone:"",
    city:"",
  }
 )
 const navigate=useNavigate();
useEffect(()=>{
  const fetchData=async()=>{
  try {
   const serverResponse= await axios.get(APIURL)
  //  setAdminData(serverResponse.data)//setting all admin data returned by backend to rect

  setUserData({
    name:serverResponse.data.name,
    phone:serverResponse.data.phone,
    city:serverResponse.data.city
  })
  } catch (error) {
    console.log(error);
    
  }

}

fetchData()
},[])

const fillData=(e)=>{

    setUserData({...userData,[e.target.name]:e.target.value})
}


//sending data with email for profile updation

 const submitData=async(e)=>

 {
  e.preventDefault()
    try {
        
      const response=  await axios.put(EDITAPIURL,userData)

      console.log(response.data)
      toast.success("profile upadted sucessfully")
      setTimeout(()=>{
        navigate("/userPage")

      },3000)

    } catch (error) {
        console.log(error);
        
    }
 }

  return (
    <>
      <UserHeader/>
      <ToastContainer position='top-center' autoClose={3000}/>
        
        <div className='main-div'>

         <div className=' w-50 mx-auto' style={{marginTop:"80px"}}>
            <form onSubmit={submitData} >
                <div className='mb-4'>
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="name" value={userData.name} required  
                    onChange={fillData}
                    
                    className='form-control'/>
                    
                     
                </div>
                 <div className='mb-4'>
                    <label htmlFor="Phone">Phone</label>
                    <input type="text" name="phone" value={userData.phone} required
                    onChange={fillData} 
                    className='form-control'/>
                    
                     
                </div>

                 <div className='mb-4'>
                    <label htmlFor="City">City</label>
                    <input type="text" name="city" value={userData.city} required
                    onChange={fillData} 
                    className='form-control'/>
                    
                     
                </div>

                <div className='text-center'>
                    <button className='btn btn-danger'>Edit Profile</button>
                </div>
            </form>
         </div>
        </div>

      <Footer/>  
    </>

  )
}

export default UserEditProfile