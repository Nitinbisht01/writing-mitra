import React from 'react'
import { useNavigate } from 'react-router-dom'

const Noticeshow = ({ noticeArray }) => {
  const navigate = useNavigate()
  
  const participate = (id, title) => {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    navigate("/user/participate")
  }

  return (
    <>
      {noticeArray.map((n) => {
        const closingDate = new Date(n.closingdate);
        const isOpen = closingDate > new Date();  // Compare dates
        
        return (
          <div className="card m-5" key={n.id} style={{ width: "20rem" }}>
            <div className="card-body">
              <h5 className="card-title">{n.title}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {`Duration: ${n.openingdate} to ${n.closingdate}`}
              </h6>
              <p className="card-text">{`Rules: ${n.rules}`}</p>
              <p>{`Description: ${n.description}`}</p>
              
              {/* Conditional button/message */}
              {isOpen ? (
                <button 
                  className='btn btn-success' 
                  onClick={() => participate(n.id, n.title)}
                >
                  Participate Now
                </button>
              ) : (
                <p style={{ color: "red" }}>Participation Closed</p>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Noticeshow;