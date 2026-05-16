import React from 'react'
import { useNavigate } from 'react-router-dom'


const Competitionshow = ({competitionArray}) => {
const navigate =useNavigate();
 const searchParticipant=(id)=>{
    
navigate("/viewPart",{state:{"id":id}})
  }
  



  return (
    <>
   {
   competitionArray.map((n)=>{
    return(
        <>
         <div className="card m-5" key={n.id} style={{width: "20rem",height:"15rem"}}>
  <div className="card-body">
        
            <h5 className="card-title">{n.title} </h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{`the duration is ${n.openingdate} to ${n.closingdate}`}</h6>
    <p className="card-text">{`the rules are ${n.rules}`}</p>
    <p >{`the Description are ${n.description}`} </p>
    

     <button className='btn btn-success'onClick={()=>{searchParticipant(n.id)}} >View Participant</button>

    
    
        </div>
        </div>
            
        </>
    )

  }  )}

  
    </>
  )
}

export default Competitionshow