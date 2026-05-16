import React, { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import '../../css/style.css'
import '../../css/admin_login.css'
import axios from 'axios'
import AdminDashboard from './AdminDashboard'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {

  const naviagte=useNavigate()

  const APIURL = "http://localhost:8080/admin/adminLogin"   

  const [validate, setValidate] = useState(false)

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const fetchData = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

const submitForm = async (e) => {
  e.preventDefault()

  const form = e.currentTarget

  // If form is invalid → stop here
  if (!form.checkValidity()) {
    e.stopPropagation()
    setValidate(true)
    return 
  }

  // If valid → continue
  setValidate(true)

  try {
    const serverResponse = await axios.post(APIURL, data)
   // console.log(serverResponse.data)

    if(serverResponse.data==="success"){
 
      //redirect to dash board

      localStorage.setItem("adminEmail",data.email);
      naviagte("/aD");
    }
    else
      alert(serverResponse.data)
    
  } catch (error) {
    console.log(error)
    
  }
}

  return (
    <>
      <Header />

      <div className='main-div'>
        <h1 className='head'>Welcome To WritingMitra</h1>

        <div className='flex-container m-2'>

          <div className="image-div mx-auto">
            <img src="profile.png" alt="img" />
          </div>

          <div className='form-div mx-auto'>
            <form
              className={`needs-validation ${validate ? 'was-validated' : ''}`}
              noValidate
              onSubmit={submitForm}
            >

              {/* Email */}
              <div className="form-floating m-3 w-75 mx-auto pt-5">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  name="email"
                  value={data.email}
                  onChange={fetchData}
                  required
                />
                <label>Email address</label>
                <div className="invalid-feedback">
                  Please enter your email
                </div>
              </div>

              {/* Password */}
              <div className="form-floating m-3 w-75 mx-auto pt-5">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  name="password"
                  value={data.password}
                  onChange={fetchData}
                  required
                />
                <label>Password</label>
                <div className="invalid-feedback">
                  Please enter your password
                </div>
              </div>

              <div className='text-center m-4'>
                <button type="submit" className='btn btn-danger w-50'>
                  Submit
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default AdminLogin