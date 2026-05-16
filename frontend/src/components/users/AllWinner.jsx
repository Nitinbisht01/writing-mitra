import React from 'react'
import Winner from './Winner'
import { useState,useEffect } from 'react'
import axios from 'axios'
import UserHeader from './UserHeader'
import Footer from "../common/Footer"


const AllWinner = () => {
  const APIURL="http://localhost:8080/user/winner"
 const [winData,setwinData]=useState([{}])

    useEffect( ()=>{

             const fetchData=async()=>{
                try {
                    const serverResponse=await axios.get(APIURL)
                   
                   setwinData(serverResponse.data);
                    
                } catch (error) {
                    console.log(error);
                    
                }
                     
            }
fetchData()
        },[]
    )

  return (
    <>
<UserHeader/>
 <div className='main-div'>
    <h1 >All Winner Details</h1>
    <div className='binder'>
        <Winner winList={winData}/>
    </div>
    
    </div>
<Footer/>
    </>
  )
}

export default AllWinner