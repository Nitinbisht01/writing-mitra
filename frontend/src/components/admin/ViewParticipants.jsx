import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import AdminHeader from './AdminHeader'
import PartList from './PartList'

const ViewParticipants = () => {
    const location=useLocation()
    const compid=location.state.id
    const APIURL=`http://localhost:8080/admin/participants/${compid}`

    const [data,setData] = useState([])
    useEffect( ()=>{

             const fetchData=async()=>{
                try {
                    const serverResponse=await axios.get(APIURL)
                   console.log( serverResponse.data);
                   setData(serverResponse.data);
                    
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
    <div className='binder'>
      <PartList partList={data}
    />
    </div>
    
    </>
  )
}

export default ViewParticipants