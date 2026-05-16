import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import AdminHeader from './AdminHeader'
import Competitionshow from './Competitionshow'
import Footer from '../common/Footer'


const AllCompetitons = () => {
const APIURL="http://localhost:8080/admin/allcompetition"
 const [competitionData,setCompetitionData]=useState([{}])

    useEffect( ()=>{

             const fetchData=async()=>{
                try {
                    const serverResponse=await axios.get(APIURL)
                   console.log( serverResponse.data);
                   setCompetitionData(serverResponse.data);
                    
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
  
    <h1 >All Competition Details</h1>
    < div style={{height:"600px",width:"100%",display:"flex",flexWrap:"nowrap"}}>
    < Competitionshow competitionArray={competitionData}/>
    </div>
    </div>

<Footer/>
    </>
  )
}

export default AllCompetitons