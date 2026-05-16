import React from 'react'
import UserHeader from './UserHeader'
import { useEffect,useState } from 'react'
import defaultProfilePic from "../../assets/pic.jpg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Footer from '../common/Footer'


const UserPage = () => {
 const email=localStorage.getItem("useremail");
 const APIURL=`http://localhost:8080/user/userProfile/${email}`
 const [userData,setUserData]=useState({
    phone:"",name:"",
    city:"",
 })
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const navigate=useNavigate();

 useEffect(()=>{
 const fetchData = async () => {

      try {

        const response = await axios.get(APIURL);

        setUserData(response.data);

        let imageUrl = defaultProfilePic;

        //If image came from navigation (after upload)
        if (location.state?.imageURL) {
          imageUrl = location.state.imageURL;
        }

        //  If image exists in database
        else if (response.data.userPic) {
          imageUrl = `http://localhost:8080/uploads/userimages/${response.data.userPic}`;
        }

        setProfilePic(imageUrl);

      } catch (error) {
        console.log("Error fetching admin data:", error);
      }

    };


fetchData();

 },[])

  return (
    <>
    <UserHeader/>
  <div className='main-div'style={{marginTop:"60px"}}>
    <h1 className='mx-auto'>
      Some of the legends in writers history
    </h1>

  {/* CarouselStart */}
  <div style={{height:"80vh", }}>
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/shake.jfif" class="d-block w-100" alt="..."
      style={{height:"80vh", }}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>William Shakespeare</h5>
        <p>“All the world’s a stage, and all the men and women merely players.”</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/leo.jfif" class="d-block w-100" alt="..."
      style={{height:"80vh", }}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Leo Tolstoy</h5>
        <p>“If you look for perfection, you’ll never be content.”</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="foyo.webp" class="d-block w-100" alt="..."
      style={{height:"80vh", }}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Fyodor Dostoevsky</h5>
        <p>“The soul is healed by being with children.”</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

  </div>

  <div style={{height:"60vh",color:"whitesmoke",backgroundColor:"#692721", 
  marginTop:"10vh"
    ,marginBottom:'10vh', flexDirection:"column",flexWrap:"nowrap",
    display:"flex",alignItems:"center",justifyContent:"center" ,fontFamily:"times New Roman"}}>
      

        <h1 >Join Our Competitions Now</h1>
        <button className=' btn btn-secondary btn-lg 'style={{width:"150px"}}
        onClick={()=>{navigate("/user/competitions")}}>
           Join
        </button>
      
      


  </div>

   <div style={{height:"60vh",color:"whitesmoke",backgroundColor:"#243533", 
  marginTop:"10vh"
    ,marginBottom:'10vh', flexDirection:"column",flexWrap:"nowrap",
    display:"flex",alignItems:"center",justifyContent:"center" ,fontFamily:"times New Roman"}}>
      

        <h1 >Write your thoughts </h1>
        <h2>It will bring you -"Clarity".</h2>
        <button className=' btn btn-secondary btn-lg 'style={{width:"150px"}}
        onClick={()=>{navigate("/user/createBlog")}}>
           New Blog
        </button>
      
      


  </div>

  
  <h3  className='text-center'> Your Data</h3>

    <div className='main-div' >
<div className="container d-flex justify-content-center mt-5">
      <div className="card shadow-lg border-0 rounded-4 p-4" style={{ width: "500px" }}>

        <div className="text-center mb-4">
          <h3 className="fw-bold">
            <div className="d-flex mx-auto" style={{  justifyContent:"center", alignItems: "center", width:"100px", height:"100px"} }> 
              <img style={{width:"100%",height:"100%"}} src={profilePic} alt="n" /> </div>
            {userData.name}
          </h3>
          <p className="text-muted mb-0">
            <i className="fa-solid fa-location-dot me-2"></i>
            {userData.city}
          </p>
        </div>

        <hr />

        <div className="mt-3">

          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-envelope fa-lg text-primary me-3"></i>
            <div>
              <p className="mb-0 fw-semibold">Email</p>
              <p className="mb-0 text-muted">{email}</p>
            </div>
          </div>

          <div className="d-flex align-items-center mb-3">
            <i className="fa-solid fa-phone fa-lg text-success me-3"></i>
            <div>
              <p className="mb-0 fw-semibold">Phone</p>
              <p className="mb-0 text-muted">{userData.phone}</p>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <i className="fa-solid fa-city fa-lg text-warning me-3"></i>
            <div>
              <p className="mb-0 fw-semibold">City</p>
              <p className="mb-0 text-muted">{userData.city}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
    </div>
    <Footer/>
    
    </>

    
  )
}

export default UserPage