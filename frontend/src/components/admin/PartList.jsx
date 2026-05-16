import React from 'react'
import axios from 'axios';
import '../../css/participant.css'
import { useNavigate } from 'react-router-dom';




const PartList = ({ partList}) => {
  const navigate=useNavigate();
  const winner=async(id)=>{  
          
        const con=confirm("Are you sure to make this user as wiiner")
        
        if(con)
        {
           alert("ok making "+id+" winner")
           const serverReponse=await axios.patch(`http://localhost:8080/admin/winner/${id}`)
           if((serverReponse.data)=="success"){
            navigate("/aD")
           }



        }
        else
        {
            alert("Not this one")
        }
    
    }
    

  
  
 return (
    <div className="participants-container">
      <h3>Participants List</h3>
      <ul className="participants-list">
        {partList.map((participant, index) => (
          <li key={participant.pid || index} className="participant-item">
            <div className="participant-header">
              <h4>{participant.title || 'Untitled'}</h4>
              <span className="participant-meta">
                Comp ID: {participant.compId} | PID: {participant.pid}
              </span>
            </div>
            <div className="user-name">
              Name: <strong>{participant.user?.name || 'N/A'}</strong>
            </div>
            <p>{` Content : ${participant.content}`}</p>
            <div className="participant-details">
              Status: {participant.pstatus === "true" ? 'Active' : 'Inactive'} | 
            
            </div>
            <div><button className='btn btn-success' onClick={()=>{winner(participant.pid)}}>Make Winner</button>
            </div>
            
          </li>
        ))}
      </ul>
      {partList.length === 0 && (
        <p className="no-participants">No participants found.</p>
      )}
    </div>
  );
};

export default PartList;