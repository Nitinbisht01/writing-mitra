import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

function AdminHeader() {
  const [showMobile, setShowMobile] = useState(false);
  const navigate=useNavigate()

  const logout=()=>{

      const email =localStorage.getItem("adminemail")
      if(email!=null){
        localStorage.removeItem("adminemail")//claer all the values

        navigate("/adminLogin")
      }

  }

  return (
    <>
      <nav className="admin-navbar fixed-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">

          {/* Brand */}
          <div className="brand">
            <i className="fa-solid fa-feather-pointed me-2"></i>
            WritingMitra Admin
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle d-lg-none"
            onClick={() => setShowMobile(!showMobile)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Nav Links */}
          <ul className={`nav-links ${showMobile ? "show" : ""}`}>
            <li>
              <Link to="/aD" className="nav-link-item">
                <i className="fa-solid fa-gauge me-2"></i>Dashboard
              </Link>
            </li>

            <li>
              <Link to="/allContact" className="nav-link-item">
                <i className="fa-solid fa-users me-2"></i>All Contact
              </Link>
            </li>

            <li>
              <Link to="/allCompetition" className="nav-link-item">
                <i className="fa-solid fa-users me-2"></i>All Competition
              </Link>
            </li>

             <li>
              <Link to="/compNotice" className="nav-link-item">
                <i className="fa-solid fa-users me-2"></i>Competition Notice 
              </Link>
            </li>

            <li>
              <Link to="/allFeedback" className="nav-link-item">
                <i className="fa-solid fa-book-open me-2"></i>All Feedback
              </Link>
            </li>

             

                         <li>
              <Link to="/aDeP" className="nav-link-item">
                <i className="fa-solid fa-book-open me-2"></i>Edit Profile
              </Link>
            </li>
              <li>
              <Link to="/changePassword" className="nav-link-item">
                <i className="fa-solid fa-book-open me-2"></i>Change Password
              </Link>
            </li>

             <li>
              <Link to="/Pu" className="nav-link-item">
                <i className="fa-solid fa-book-open me-2"></i>Upload pic
              </Link>
            </li>

            <li>
              <Link to="#" className="nav-link-item">
                <i className="fa-solid fa-gear me-2"></i>Settings
              </Link>
            </li>

            <li>
             <button className="nav-link-item logout btn btn-link" onClick={()=>{logout()}}>

               <i className="fa-solid fa-right-from-bracket me-2"></i>Logout

             </button>
                
              
            </li>
          </ul>

        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: "100px" }}></div>

      {/* ===== INTERNAL STYLING ===== */}
      <style>{`

        /* ===== NAVBAR BASE ===== */
        .admin-navbar {
          background: #ffffff;
          height: 90px;
          display: flex;
          align-items: center;
          padding: 0 70px;
          border-bottom: 1px solid #EDE8D0;
          box-shadow: 0 4px 20px rgba(130, 113, 110, 0.05);
          z-index: 1000;
        }

        /* ===== BRAND ===== */
        .brand {
          font-size: 22px;
          font-weight: 600;
          color: #82716E;
          letter-spacing: 1px;
        }

        /* ===== NAV LINKS ===== */
        .nav-links {
          display: flex;
          gap: 50px;
          list-style: none;
          margin: 0;
          align-items: center;
        }

        .nav-link-item {
          text-decoration: none;
          color: #82716E;
          font-weight: 500;
          font-size: 15px;
          position: relative;
          transition: all 0.3s ease;
        }

        /* Elegant underline animation */
        .nav-link-item::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 0%;
          height: 2px;
          background: #D67C4E;
          transition: width 0.3s ease;
        }

        .nav-link-item:hover {
          color: #D67C4E;
        }

        .nav-link-item:hover::after {
          width: 100%;
        }

        /* Logout special color */
        .logout:hover {
          color: #A05252 !important;
        }

        .logout::after {
          background: #A05252;
        }

        /* ===== MOBILE BUTTON ===== */
        .mobile-toggle {
          background: transparent;
          border: none;
          font-size: 20px;
          color: #82716E;
        }

        /* ===== RESPONSIVE DESIGN ===== */
        @media (max-width: 992px) {

          .admin-navbar {
            padding: 0 30px;
          }

          .nav-links {
            position: absolute;
            top: 90px;
            right: 0;
            flex-direction: column;
            background: white;
            width: 100%;
            padding: 35px 0;
            border-top: 1px solid #EDE8D0;
            display: none;
          }

          .nav-links.show {
            display: flex;
          }

          .nav-links li {
            padding: 12px 0;
          }

        }

      `}</style>
    </>
  );
}

export default AdminHeader;