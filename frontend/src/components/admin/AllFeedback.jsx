import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import AdminHeader from './AdminHeader'
import FeedbackDetails from './FeedbackDetails'

const AllFeedback = () => {
const APIURL="http://localhost:8080/admin/allFeedback"
 const [feedbackData,setFeedbackData]=useState([{}])

    useEffect( ()=>{

             const fetchData=async()=>{
                try {
                    const serverResponse=await axios.get(APIURL)
                   console.log( serverResponse.data);
                   setFeedbackData(serverResponse.data);
                    
                } catch (error) {
                    console.log(error);
                    
                }
                     
            }
fetchData()
        },[]
    )

  return (
    <>
<AdminHeader/>
 <div className='main-div'>
    <h1 >All contact Details</h1>
    <FeedbackDetails FeedbackArray={feedbackData}/>
    </div>

    </>
  )
}

export default AllFeedback