

//import './App.css'

import FetchFeedBack from "./components/common/FetchFeedback"
import Footer from "./components/common/Footer"
import Header from "./components/common/Header"
import Hero from "./components/common/Hero"
import './css/style.css'
function App() {
  

  return (
    <>
      <div>
        
          <Header/> 
          <div className="main-div" style={{backgroundColor:"black"}}>
            <Hero/>
            
           
           
          </div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1"
             d="M0,192L40,165.3C80,139,160,85,240,96C320,107,400,181,480,192C560,203,640,149,720,128C800,107,880,
             117,960,144C1040,171,1120,213,1200,229.3C1280,245,1360,235,1400,229.3L1440,224L1440,0L1400,0C1360,0
             ,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640
            ,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

            <div>
              
            </div>


          <FetchFeedBack/>

          <Footer/>    
         

      </div>
    </>
  )
}

export default App
