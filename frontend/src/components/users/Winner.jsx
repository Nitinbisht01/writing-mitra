import React from 'react'
import "../../css/participant.css"

const Winner = ({winList}) => {
  return (
    <div className="participants-container">
      <h3>Winner List</h3>
      <ul className="participants-list">
        {winList.map((participant, index) => (
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
              <h1>WINNER</h1>
            
            </div>
            
            </li>
            
          
        ))}
      </ul>
      {winList.length === 0 && (
        <p className="no-participants">No participants found.</p>
      )}
    </div>
  );
}

export default Winner