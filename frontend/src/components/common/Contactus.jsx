import React from 'react'
import{useState} from'react'
import Header from './Header'
import Footer from './Footer'
import '../../css/style.css'
import Swal from 'sweetalert2'
import axios from 'axios'

function Contactus() {

  const APIURL="http://localhost:8080/addContact"


   const[validate,setValidate]=useState(false);
  
    const submitForm=async(e)=>{
      // alert("in function")
  

       e.preventDefault()
      console.log(e.currentTarget);
      const form=e.currentTarget
       if (!form.checkValidity()) {
          e.preventDefault()
          e.stopPropagation()
        }
  
        setValidate(true)
       

        //code for backend process
        try {
          const serverResponse=await axios.post(APIURL,data)
         // console.log(`send by server ${serverResponse}`)
          console.log(serverResponse.data)

           Swal.fire("Contact Sucessfully added ");

           

        } catch (error) {
          console.log(error)
        }
setData({name:"", email:"",
    phone:"",
    question:""})



  //  e.preventDefault()
  //     console.log(`name is ${data.name}`);
  //     console.log(`email is ${data.email}`);
  //     console.log(`phone is ${data.phone}`);
  //     console.log(`question is ${data.question}`);
  
    }

  const[data,setData]=useState({name:"",
    email:"",
    phone:"",
    question:""})


    const fetchData=(e)=>{
      // console.log(e.target.name);
      // console.log(e.target.required value);

      const{name,value}=e.target //object destrcturing

      //regular expresion

      const alphaRegex=/^[A-Za-z\s]*$/;
      const numberRegex=/^[0-9]*$/;

      if((name==="name")&& !alphaRegex.test(value)){
        Swal.fire("only alphabet!");
        return
      }

       if((name==="phone")&& !numberRegex.test(value)){
        alert("only numbers are allowed");
        return
      }

      setData({...data,[name]:value})
    }


    

     

    

  return (
    <>
    <Header/>
    <div className='main-div mx-auto '>
        <div style={{display:"flex",marginTop:"10px"}} >
            <div className='w-50' style={{ display:"flex", justifyContent:"center",alignItems:"center"}}>
        <img  style={{height:"450px" ,width:"480px", marginTop:"20px",  borderRadius: "10px" }} src="cont.jpg" alt="" />

    </div>
    <div className='w-50' style={{ display:"flex", justifyContent:"center",alignItems:"center"}}>
      
      <form className={` w-75 mx-auto needs-validation ${validate ?'was-validated':'' } `} noValidate onSubmit={submitForm}>

       <div className='mb-3'>
        <label htmlFor="name" className='form-label'   > Enter Name</label>
        <input type="text" name='name' className='form-control' placeholder='Enter name'
         required value={data.name}  onChange={fetchData}  />
 <div className="invalid-feedback">
        enter Name
      </div>
       </div>
              <div className='mb-3'>
        <label htmlFor="email" className='form-label'   > Enter Email</label>
        <input type="email" name='email' className='form-control' placeholder='Enter email'
        required value={data.email} onChange={fetchData} />
         <div className="invalid-feedback">
        enter email
      </div>

       </div>
              <div className='mb-3'>
        <label htmlFor="phone" className='form-label'   > Enter Phone</label>
        <input type="text" name='phone' className='form-control' placeholder='Enter phone no.'
        required value={data.phone} onChange={fetchData} />
         <div className="invalid-feedback">
        enter phone no.
      </div>

       </div>

              <div className='mb-3'>
        <label htmlFor="question" className='form-label'   > Enter Your question </label>
        <textarea name="question" id="" className='form-control'
         value={data.question} onChange={fetchData}  ></textarea>

       </div><button className='btn btn-danger' > submit </button>

      </form>

    </div>
        </div>
         <div className="container  mx-auto m-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.4001103144396!2d80.95672737450346!3d26.87430426174174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd66707a1371%3A0x49dc27c64bc0aab2!2sPrecursor%20Info%20Solutions%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1770980766348!5m2!1sen!2sin" 
                style={{border:"0",
                height:"300px",
                width:"100%",
                

               }} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

        
    

</div>
<Footer/>
    </>
  )
}

export default Contactus