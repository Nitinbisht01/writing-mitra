import React from 'react'
import Footer from './Footer'
import '../../css/aboutus.css'
import Header from './Header'


function Aboutus() {
  return (
    <div>
        <Header/>
          <div className='main-div'>


      <div className="about-div">

        <div className="circle-container">

          <div className="circle">
            <h3>About</h3>
            <p>
              Writing Mitra helps users improve writing skills with smart tools
              and suggestions for better clarity and creativity.
            </p>
          </div>

          <div className="circle">
            <h3>Mission</h3>
            <p>
              Our mission is to make writing simple, accessible, and powerful
              for everyone.
            </p>
          </div>

          <div className="circle">
            <h3>Features</h3>
            <p>
              Grammar help, content ideas, fast UI, and intelligent writing support.
            </p>
          </div>

          <div className="circle">
            <h3>Why Us?</h3>
            <p>
              We focus on simplicity, speed, and user-friendly design to enhance
              your writing experience.
            </p>
          </div>

        </div>
      </div>

      </div>
        
        <Footer/>


    </div>
  )
}

export default Aboutus