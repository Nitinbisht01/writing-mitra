import React from 'react'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate=useNavigate()
    return (
    <>
    <div style={{width:"100%",height:"90vh",
        
                
        display:"flex",
        alignItems:"center",
        justifyContent:'center',
        
        backgroundColor:"black",
    
        

    }}>
        <div className='mx-auto' style={{height:"5rem", width:"80%",color:"White",textAlign:"center" ,
            fontFamily:"Times New Roman"}}>
            <h1>“You don’t need permission to be heard</h1>
                <h1>-only the courage to begin.”</h1>
                <button className='btn btn-info mx-auto' style={{color:"white",fontFamily:"arial"}} onClick={()=>{navigate("/userRegis")}}>Join Now</button>

        </div>
        
        </div>    

    </>
  )
}

export default Hero