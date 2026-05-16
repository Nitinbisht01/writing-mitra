import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import AdminHeader from './AdminHeader'
import UserDetails from './UserDetails'

const AllUser = () => {
 const APIURL="http://localhost:8080/admin/allUsers"

    const[userData,setUserData]=useState([{}])
    useEffect(()=>{
        const fetchData=async()=>{

            try {
             const serverResponse= await axios.get(APIURL);
             console.log(serverResponse.data)
             setUserData(serverResponse.data) 
            } catch (error) {
                console.log(error)
            }
           

        }
        fetchData()
    }
     
    ,[])

  return (
    <>
    <AdminHeader/>
    <UserDetails userArray={userData}/>
    

    
    </>
  )
}

export default AllUser