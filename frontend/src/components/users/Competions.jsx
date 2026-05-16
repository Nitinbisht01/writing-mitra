import React from "react"
import { useState} from "react"
import { useEffect } from "react"
import axios from "axios"
import UserHeader from "./UserHeader"
import Noticeshow from "./Noticeshow"
const Competions = () => {
const APIURL="http://localhost:8080/user/notice"
 const [notice,setnoticeData]=useState([])

    useEffect( ()=>{

             const fetchData=async()=>{
                try {
                    const serverResponse=await axios.get(APIURL)
                   console.log( serverResponse.data);
                   setnoticeData(serverResponse.data);
                    
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
    <h1 >All Notice </h1>
    <div className="binder">
    <Noticeshow noticeArray={notice}/>
    </div>
    </div>

    </>
  )
}

export default Competions