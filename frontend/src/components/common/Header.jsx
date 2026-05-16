import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">
    <h2 style={{color:"white",fontFamily:"Mrs Sheppards" }}>Writing mitra</h2>
        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">AboutUs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">ContactUs</Link>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Register
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/userRegis">NewUser</Link></li>
            
          </ul>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/userLogin">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/userFeedback">Feedback</Link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
        </div>
    </div>
  )
}

export default Header