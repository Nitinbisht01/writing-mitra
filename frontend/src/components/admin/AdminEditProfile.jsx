import React from 'react'
import AdminHeader from './AdminHeader'
import{useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";




function AdminDashboard() {

  const navigate=useNavigate();
  //fetching value from local storage
const email =localStorage.getItem("adminemail")
const APIURL=`http://localhost:8080/admin/adminProfile/${email}`
const EDITAPIURL=`http://localhost:8080/admin/editProfile/${email}`
const [admindata,setAdminData]=useState({name:"",phone:""})


useEffect(()=>{
  const fetchData=async()=>{
  try {
   const serverResponse= await axios.get(APIURL)
  //  setAdminData(serverResponse.data)//setting all admin data returned by backend to rect

  setAdminData({
    name:serverResponse.data.name,
    phone:serverResponse.data.phone
  })
  } catch (error) {
    console.log(error);
    
  }

}

fetchData()
},[])

const fillData=(e)=>{

    setAdminData({...admindata,[e.target.name]:e.target.value})
}


//sending data with email for profile updation

 const submitData=async(e)=>

 {
  e.preventDefault()
    try {
        
      const response=  await axios.put(EDITAPIURL,admindata)

      console.log(response.data)
      toast.success("profile upadted sucessfully")
      setTimeout(()=>{
        navigate("/aD")

      },3000)

    } catch (error) {
        console.log(error);
        
    }
 }

  return (
    <div>
      <AdminHeader/>
      <ToastContainer position='top-center' autoClose={3000}/>
        
        <div className='main-div'>

         <div className=' w-50 mx-auto'>
            <form onSubmit={submitData} >
                <div className='mb-4'>
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="name" value={admindata.name} required  
                    onChange={fillData}
                    
                    className='form-control'/>
                    
                     
                </div>
                 <div className='mb-4'>
                    <label htmlFor="Phone">Phone</label>
                    <input type="text" name="phone" value={admindata.phone} required
                    onChange={fillData} 
                    className='form-control'/>
                    
                     
                </div>
                <div className='text-center'>
                    <button className='btn btn-danger'>Edit Profile</button>
                </div>
            </form>
         </div>
        </div>
        
    </div>
  )
}

export default AdminDashboard