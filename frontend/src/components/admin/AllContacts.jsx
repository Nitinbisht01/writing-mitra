import React from 'react'
import AdminHeader from './AdminHeader'
import axios from 'axios'
import { useEffect,useState } from 'react'
import ContactDetails from './ContactDetails'
const AllContacts = () => {
    const APIURL="http://localhost:8080/admin/allContacts"
    //

    const [contactData,setContactData]=useState([{}])

    useEffect( ()=>{

             const fetchData=async()=>{
                try {
                    const serverResponse=await axios.get(APIURL)
                   console.log( serverResponse.data);
                   setContactData(serverResponse.data);
                    
                } catch (error) {
                    console.log(error);
                    
                }
                     
            }
fetchData()
        },[]
    )//use effect end

//for delete contact
const deleteContact=async(id)=>{

   // alert(id)
     const DELAPIURL=`http://localhost:8080/admin/deleteContact/${id}`
try {
   const serverReponse=await axios.delete(DELAPIURL)
   console.log(serverReponse.data);
 const upadatedArray=  contactData.filter((cobj)=>{
    return cobj.id!=id;
   }) 

   setContactData(upadatedArray)//modifying the state variable
} catch (error) {
    console.log(error)
}
    
}

  return (
    <>
    <AdminHeader/>
    <div className='main-div'>
    <h1>All contact Details</h1>
    <ContactDetails contactArray={contactData}
    deleteById={deleteContact}/>
    </div>
    
    </>
  )
}

export default AllContacts