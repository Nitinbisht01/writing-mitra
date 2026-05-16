import React from "react";
import "../../css/footer.css";
import TypingQuote from "./TypingQuote";
const Footer = () => {

  const handleHover = (e) => {
    e.currentTarget.style.transform =
      "translateY(-5px) rotate(6deg) scale(1.1)";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform =
      "translateY(0px) rotate(0deg) scale(1)";
  };

  return (
    <footer className="footer-section container-fluid pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h3 className="footer-logo">Writing Mitra</h3>
            
              {<TypingQuote/>}
            
          </div>

          {/* Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              
              <li><a href="/about">About Us</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Info</h5>
            <ul className="list-unstyled">
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Inspiration </a></li>
              <li><a href="#">Showcase Your Thoughts</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Community</h5>
            <ul className="list-unstyled">
              <li><a href="userRegis">Writers</a></li>
              <li><a href="#">Competition</a></li>
              
            </ul>
          </div>

        </div>

        <hr className="footer-divider" />

        {/* Bottom */}
        <div className="d-flex justify-content-between align-items-center flex-wrap">

          <p className="mb-2">
            © {new Date().getFullYear()} Writing Mitra. All rights reserved.
          </p>

          <div className="social-icons d-flex gap-4">

            <a href="#" 
               className="social-icon"
               onMouseEnter={handleHover}
               onMouseLeave={handleLeave}>
              <i className="fab fa-instagram"></i>
            </a>

            <a href="#" 
               className="social-icon"
               onMouseEnter={handleHover}
               onMouseLeave={handleLeave}>
              <i className="fab fa-twitter"></i>
            </a>

            <a href="#" 
               className="social-icon"
               onMouseEnter={handleHover}
               onMouseLeave={handleLeave}>
              <i className="fab fa-youtube"></i>
            </a>

            <a href="#" 
               className="social-icon"
               onMouseEnter={handleHover}
               onMouseLeave={handleLeave}>
              <i className="fab fa-linkedin"></i>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
