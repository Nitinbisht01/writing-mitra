import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import FetchFeedBackDetail from './FetchFeedBackDetail';



function FetchFeedBack() {

    const[fetchFeed,setFetchFeed]=useState([{}])

   const APIURL = "http://localhost:8080/fetchFeedback";

    useEffect(()=>
    {

        const fetchData=async()=>
        {
            try {

                const serverResponse=await axios.get(APIURL)
                

                setFetchFeed(serverResponse.data)

                
                
                
            } catch (error) 
            {
                console.log(error);
                
                
            }


        }
        fetchData();


    },[])
  return (

    <>

    


    <FetchFeedBackDetail feedbackArray={fetchFeed}/>

    





   
      
    
    </>

     

)
}

export default FetchFeedBack