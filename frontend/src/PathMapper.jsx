import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import App from './App.jsx'
import Aboutus from './components/common/Aboutus.jsx'
import Contactus from './components/common/Contactus.jsx'
import AdminLogin from './components/admin/AdminLogin.jsx'
import UserLogin from './components/users/UserLogin.jsx'
import UserRegis from './components/users/UserRegis.jsx'
import UserFeedback from './components/users/UserFeedback.jsx'
import AdminDashboard from './components/admin/AdminDashboard.jsx'
import UserPage from './components/users/UserPage.jsx'
import AllContacts from './components/admin/AllContacts.jsx'
import AllFeedback from './components/admin/AllFeedback.jsx'
import AllUser from './components/admin/AllUser.jsx'
import CreateBlog from './components/users/CreateBlog.jsx'
import AdminEditProfile from './components/admin/AdminEditProfile.jsx'
import UserEditProfile from './components/users/UserEditProfile.jsx'
import ProfileUpload from './components/admin/ProfileUpload.jsx'
import CompetitionNotice from './components/admin/CompetitionNotice.jsx'
import FetchFeedBack from './components/common/FetchFeedback.jsx'
import CreativeWriterPage from './components/users/CreativeWriterPage.jsx'
import SearchBlog from './components/users/SearchBlog.jsx'
import Competions from './components/users/Competions.jsx'
import Participate from './components/users/Participate.jsx'
import AllCompetitons from './components/admin/Allcompetitions.jsx'
import ViewParticipants from './components/admin/ViewParticipants.jsx'
import ChangePassword from './components/admin/ChangePassword.jsx'
import UserProfileUpload from './components/users/UserProfileUpload.jsx'
import AllWinner from "./components/users/AllWinner.jsx"
import ChangeUserPassword from './components/users/ChangeUserPassword.jsx'
function PathMapper() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>} ></Route>
        <Route path='/about' element={<Aboutus/>} ></Route>
        <Route path='/contact' element={<Contactus/>} ></Route>
        <Route path='/fetchFeed' element={<FetchFeedBack/>} ></Route>

        <Route path="/userLogin" element={<UserLogin/>} ></Route>
          <Route path="/userRegis" element={<UserRegis/>} ></Route>
          <Route path="/userFeedback" element={<UserFeedback/>} ></Route>
          <Route path="/userPage" element={<UserPage/>} ></Route>
          <Route path="/user/createBlog" element={<CreateBlog/>} ></Route>
          <Route path="/user/uDeP" element={<UserEditProfile/>} ></Route>
          <Route path="/user/creative" element={<CreativeWriterPage/>} ></Route>
          <Route path="/user/search" element={<SearchBlog/>} ></Route>
          <Route path="/user/competitions" element={<Competions/>} ></Route>
          <Route path="/user/participate" element={<Participate/>} ></Route>
          <Route path="/user/cp" element={<Participate/>} ></Route>
          <Route path="/user/winner" element={<AllWinner/>} ></Route>
          <Route path="/user/pic" element={<UserProfileUpload/>} ></Route>
          <Route path="/user/change" element={<ChangeUserPassword/>} ></Route>
          

        

                 


          <Route path="/adminLogin" element={<AdminLogin/>} ></Route>
          <Route path="/aD" element={<AdminDashboard/>} ></Route>
          <Route path="/allContact" element={<AllContacts/>} ></Route>
          <Route path="/allFeedback" element={<AllFeedback/>} ></Route>
          <Route path="/allCompetition" element={<AllCompetitons/>} ></Route>
          <Route path="/allUser" element={<AllUser/>} ></Route>
          <Route path="/aDeP" element={<AdminEditProfile/>} ></Route>
          <Route path="/Pu" element={<ProfileUpload/>} ></Route>
          <Route path="/compNotice" element={<CompetitionNotice/>} ></Route>
          <Route path="/viewPart" element={<ViewParticipants/>} ></Route>
          <Route path="/changePassword" element={<ChangePassword/>} ></Route>

          


    </Routes>

      


        
          
        

    </BrowserRouter>
    </>
  )
}

export default PathMapper