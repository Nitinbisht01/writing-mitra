import React, { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useNavigate } from 'react-router-dom'
//import '../../css/userRegis.css'
import Swal from 'sweetalert2'
import axios from 'axios'


function UserRegis() {
  const APIURL="http://localhost:8080/user/registration"
  
  const [validate,setValidate]=useState(false)
  const navigate=useNavigate();

  const submitForm=async(e)=>{
     e.preventDefault()
     // console.log(e.currentTarget);
      const form=e.currentTarget
       if (!form.checkValidity()) {
          e.preventDefault()
          e.stopPropagation()
        }
  
        setValidate(true)


        try {
         const serverResponse=await axios.post(APIURL,data)
        console.log(`send by server ${serverResponse}`)
          if("Registration success"==(serverResponse.data))navigate("/")
        } catch (error) {
          console.log(error)
        }

  }







  const[data,setData]=useState({
    name:"",
    email:"",
    city:"",
    phone:"",
    password:"",



  })
  function fetchData(e){
    const{name,value}=e.target

    const alphaRegex=/^[A-Za-z\s]*$/;
      const numberRegex=/^[0-9]*$/;

      if((name==="name")&& !alphaRegex.test(value)){
         Swal.fire("only alphabet!");;
                return
      }
    if((name==="phone")&& !numberRegex.test(value))
    {
       Swal.fire("only number!");;
              return
    }

    setData({...data,[name]:value})
  }
  const checkemail=async(email)=>{
    const APIURLcheck=`http://localhost:8080/user/checkemail/${email}`
    try {
       const response=await axios.get(APIURLcheck)
    if(response.data=="exists"){

      alert("user already exists use another email")
      document.getElementById("email").value=""
    }
      
    } catch (error) {
      console.log(error);
    }
   

  }





  return (
    <>
    
    <Header/>
    
   <div className='main-div' >
<h1 style={{textAlign:"center"}}>User Registration</h1>
      <div className="content">
        <form className={` w-75 mx-auto needs-validation ${validate ?'was-validated':'' } `}
        noValidate onSubmit={submitForm}>
        <div className="form-container w-25 mx-auto">
          <h3>Register Here</h3>

              <div className='mb-3'>
                <label htmlFor="name">Enter the name</label>
                <input type="text" name="name" className='form-control' 
                value={data.name} required onChange={fetchData} placeholder='enter name' />
                <div className="invalid-feedback">
        enter Name
      </div>
             </div>


            <div className='mb-3'>
                <label htmlFor="email">Enter the email</label>
                <input type="email" name="email" className='form-control' 
                id="email"
                value={data.email} required onChange={fetchData} placeholder='enter email'
                onBlur={()=>{checkemail(data.email)}} />
                <div className="invalid-feedback">
        enter email
      </div>
             </div>

               <div className='mb-3'>
                <label htmlFor="password">Enter the password</label>
                <input type="password" name="password" className='form-control' 
                value={data.password} required onChange={fetchData} placeholder='enter password' />
                <div className="invalid-feedback">
        enter password
      </div>
             </div>

             
    
              <div className='mb-3'>
                <label htmlFor="phone">Enter the phone</label>
                <input type="tel" name="phone" className='form-control' 
                value={data.phone} required onChange={fetchData} placeholder='enter phone' />
                <div className="invalid-feedback">
        enter phone no.
      </div>
             </div>

             <div className='mb-3'>
                <label htmlFor="city">Enter the city</label>
                <select name="city" className='form-control' 
                value={data.city} required onChange={fetchData} placeholder='enter city'>
                  

                    <option 
                    value=""disabled>Select city</option>
                    <option 
                    value="Lucknow">Lucknow</option>
                    <option 
                    value="Delhi">Delhi</option>
                    <option 
                    value="Banglore">Banglore</option>
                    <option 
                    value="Chandigarh">Chandigarh</option>
                    <option 
                    value="Goa">Goa</option>
                    <option 
                    value="Dehradoon">Dehradoon</option>




                </select>


                </div>

             <button className='btn btn-danger'>Submit</button>

        </div></form>
      </div>
    </div>

    <Footer/>
    
    
    </>
  )
}

export default UserRegis