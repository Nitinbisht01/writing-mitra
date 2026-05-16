import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

function UserHeader() {
  const [isOpen, setIsOpen] = useState(false);
   const navigate=useNavigate()
  // Your palette
  const WARM_BEIGE = "#EDE8D0";   // use as subtle panels, not full bg
  const RICH_BROWN = "#82716E";
  const SOFT_ORANGE = "#D67C4E";
  const SOFT_SKY = "#90C8F6";
  const SAGE_GREEN = "#9DC183";
  const MUTED_RED = "#A05252";

  const WARM_WHITE = "#FDF9F0";   // main background

  const logout=()=>{
    const email = localStorage.getItem("useremail")
    if(email!=null){
      localStorage.removeItem("useremail")
      navigate("/userLogin")
    }
  }

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar fixed-top px-3 shadow-sm"
        style={{
          backgroundColor: WARM_WHITE,
          height: "64px",
          borderBottom: `1px solid ${WARM_BEIGE}`,
        }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <span
            className="navbar-brand mb-0 h5"
            style={{
              color: RICH_BROWN,
              letterSpacing: "0.06em",
              fontWeight: 600,
            }}
          >
            Writing Mitra
          </span>

          <button
            className="btn p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <i
              className="fa-solid fa-bars"
              style={{ fontSize: "1.4rem", color: SOFT_ORANGE }}
            ></i>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className="user-sidebar"
        style={{
          right: isOpen ? "0" : "-280px",
        }}
      >
        {/* User Section */}
        <div className="text-center mb-4">
          <i
            className="fa-solid fa-user-circle mb-3"
            style={{ fontSize: "3rem", color: SOFT_ORANGE }}
          ></i>
          <h6
            style={{
              color: RICH_BROWN,
              marginBottom: 0,
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            Hello, Writer
          </h6>
        </div>

        {/* Menu */}
        <ul className="nav flex-column px-3">
          <li className="nav-item mb-3">
            <Link
              to="/user/home"
              className="nav-link menu-item"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-house me-2"></i> Home
            </Link>
          </li>

          <li className="nav-item mb-3">
            <Link
              to="/userFeedback"
              className="nav-link menu-item"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-comment-dots me-2"></i> Feedback
            </Link>
          </li>

            <li className="nav-item mb-3">
            <Link
              to="/user/winner"
              className="nav-link menu-item"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-comment-dots me-2"></i> AllWinner
            </Link>
          </li>

            
           <li className="nav-item mb-3">
            <Link
              to="/user/creative"
              className="nav-link menu-item"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-comment-dots me-2"></i> Creative Ai
            </Link>
          </li>

          <li className="nav-item mb-3">
            <Link
              to="/user/createBlog"
              className="nav-link menu-item"
              onClick={() => setIsOpen(false)}
            >
              <i className="ri-add-box-fill me-2"></i> Create Blog
            </Link>
          </li>
           <li className="nav-item mb-3">
            <Link
              to="/user/search"
              className="nav-link menu-item"
              onClick={() => setIsOpen(false)}
            >
              <i className="ri-add-box-fill me-2"></i> Search Blog
            </Link>
          </li>

          <li className="nav-item mb-3">
            <Link
              to="/user/uDeP"
              className="nav-link menu-item"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-user-pen me-2"></i> Edit Profile
            </Link>
          </li>

           <li className="nav-item mb-3">
            <Link
              to="/user/change"
              className="nav-link menu-item"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-user-pen me-2"></i> Change Password
            </Link>
          </li>

          <li className="nav-item mb-3">
            <Link
              to="/user/pic"
              className="nav-link menu-item"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-user-pen me-2"></i> Edit picture
            </Link>
          </li>

                 <li className="nav-item mb-3">
            <Link
              to="/user/competitions"
              className="nav-link menu-item"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-user-pen me-2"></i> Show Competition
            </Link>
          </li>

          <li className="nav-item">
            <button
              className="nav-link menu-item btn btn-link"
              onClick={() => {logout()}}
            >
              <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.18)",
            zIndex: 998,
          }}
        />
      )}

      {/* Styles */}
      <style>{`
        .user-sidebar {
          position: fixed;
          top: 0;
          width: 280px;
          height: 100vh;
          background-color: ${WARM_WHITE};
          border-left: 1px solid ${WARM_BEIGE};
          box-shadow: -8px 0 24px rgba(0,0,0,0.04);
          transition: right 0.3s ease;
          padding-top: 80px;
          padding-bottom: 24px;
          z-index: 999;
          overflow-y:auto;
        }

        .menu-item {
          border-radius: 12px;
          padding: 11px 14px;
          color: ${RICH_BROWN};
          font-weight: 500;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          gap: 8px;
          transition:
            background-color 0.2s ease,
            transform 0.15s ease,
            color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .menu-item i {
          color: ${SOFT_ORANGE};
        }

        .menu-item:hover {
          background-color: ${WARM_BEIGE};
          box-shadow: 0 3px 8px rgba(0,0,0,0.06);
          transform: translateX(3px);
          color: ${RICH_BROWN} !important;
        }

        .menu-item:hover i {
          color: ${MUTED_RED};
        }

        body {
          background-color: ${WARM_WHITE};
        }
      `}</style>
    </>
  );
}

export default UserHeader;
