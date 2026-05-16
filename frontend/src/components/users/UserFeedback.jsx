import React from 'react'
import { useState } from 'react'
import Footer from '../common/Footer'
import '../../css/userfeedback.css'
import axios from 'axios'
import UserHeader from './UserHeader'

const UserFeedback = () => {

    const APIURL="http://localhost:8080/user/addfeedback"

   const email=localStorage.getItem("useremail");
  const [rating, setRating] = useState(0)
  const [data, setData] = useState({
    email,
    message: ""
  })

  const fetchData = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const submitForm =async(e) => {

    const finalData = {
    ...data,
    rating: rating
  }
    e.preventDefault()

    try {
        const serverResponse= await axios.post(APIURL,finalData);
        console.log(`the response from server ${serverResponse}`)
       console.log( serverResponse.data)
    } catch (error) {
        console.log(error);
    }
    

    // console.log("Useremail:", data.useremail)
    // console.log("Message:", data.message)
    // console.log("Rating:", rating)

    alert("Thank you for your feedback ❤️")
  }

  const getEmoji = () => {
    switch (rating) {
      case 1: return "😔"
      case 2: return "🙂"
      case 3: return "😊"
      case 4: return "😄"
      case 5: return "🤩"
      default: return ""
    }
  }

  return (
    <div>
      <UserHeader/>

      <div className='main-div'>

        <div className='w-50 mx-auto m-5 feedback-card p-4'>

          <form onSubmit={submitForm}>

            {/* Useremail */}
            <div className="mb-3">
              <label className="form-label">Your Useremail</label>
              <input
                type="text"
                name="useremail"
                className="form-control"
                placeholder="Enter name"
                value={email}
                onChange={fetchData}
                readOnly
              />
            </div>

            {/* Star Rating */}
            <div className="text-center mb-3">
              <h5 className="rating-title">Rate Your Experience</h5>

              <div className="star-container mt-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`fa-star fa-2x mx-2 ${rating >= star ? "fas active-star" : "far"
                      }`}
                    onClick={() => setRating(star)}
                  ></i>
                ))}
              </div>

              {/* Emoji */}
              <div className="emoji-display mt-3">
                {getEmoji()}
              </div>
            </div>

            {/* Message */}
            <div className="mb-3">
              <label className="form-label">Write your reflection</label>
              <textarea
                name="message"
                className="form-control"
                rows="3"
                value={data.message}
                onChange={fetchData}
              ></textarea>
            </div>

            <button className="btn submit-btn w-100">
              Submit Feedback
            </button>

          </form>

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default UserFeedback
