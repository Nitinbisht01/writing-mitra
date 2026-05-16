import React, { useState } from 'react'
import AdminHeader from './AdminHeader'
import Footer from '../common/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CompetitionNotice = () => {
  const email=localStorage.getItem("adminEmail")
  const APIURL = `http://localhost:8080/admin/notice/${email}`
  const navigate=useNavigate()

  const [data, setData] = useState({
    title: "",
    openingdate: "",
    closingdate: "",
  
    rules: "",
    description: "",
  })

  const fetchData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const submitData = async (e) => {
    e.preventDefault()
    try {
      const serverResponse = await axios.post(APIURL, data)
      console.log(serverResponse.data)
      if("Notice Saved Successfully"==(serverResponse.data)){
        navigate("/aD")
      }
    } catch (error) {
      console.log(error)
    }
    

    
  }

  return (
    <>
      <AdminHeader />

      <div
        className="main-div"
        style={{
          minHeight: '100vh',
          backgroundColor: '#EDE0B0',
          padding: '4rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className="w-100"
          style={{
            maxWidth: '640px',
            background: 'rgba(255,255,255,0.9)',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(178,126,110,0.3)',
            color: '#B27E6E',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '2.5rem',
              color: '#B27E6E',
              letterSpacing: '0.05em',
            }}
          >
            Competition Notice
          </h2>

          <form onSubmit={submitData}>
            {/* Title */}
            <div className="form-floating mb-4">
              <input
                type="text"
                className="form-control"
                id="titleInput"
                name="title"
                placeholder="Enter title"
                value={data.title}
                onChange={fetchData}
                style={{
                  border: '2px solid #D6C49A',
                  borderRadius: '12px',
                  paddingTop: '1.25rem',
                  paddingBottom: '.5rem',
                  fontSize: '1.05rem',
                  backgroundColor: '#FFFFFF',
                }}
              />
              <label htmlFor="titleInput" style={{ color: '#B27E6E' }}>
                Title
              </label>
            </div>

            {/* Date */}
            <div className="form-floating mb-4">
              <input
                type="Date"
                className="form-control"
                id="dateInput"
                name="openingdate"
                placeholder="yyyy-mm-dd"
                value={data.openingdate}
                onChange={fetchData}
                style={{
                  border: '2px solid #D6C49A',
                  borderRadius: '12px',
                  paddingTop: '1.25rem',
                  paddingBottom: '.5rem',
                  fontSize: '1.05rem',
                  backgroundColor: '#FFFFFF',
                }}
              />
              <label htmlFor="dateInput" style={{ color: '#B27E6E' }}>
                Opening Date
              </label>
            </div>

            {/* Time */}
            <div className="form-floating mb-4">
              <input
                type="Date"
                className="form-control"
                id="timeInput"
                name="closingdate"
                placeholder="hh:mm"
                value={data.closingdate}
                onChange={fetchData}
                style={{
                  border: '2px solid #D6C49A',
                  borderRadius: '12px',
                  paddingTop: '1.25rem',
                  paddingBottom: '.5rem',
                  fontSize: '1.05rem',
                  backgroundColor: '#FFFFFF',
                }}
              />
              <label htmlFor="timeInput" style={{ color: '#B27E6E' }}>
                Closing date
              </label>
            </div>

           

            {/* Rules */}
            <div className="form-floating mb-4">
              <textarea
                className="form-control"
                id="rulesTextarea"
                name="rules"
                placeholder="Write the rules here"
                value={data.rules}
                onChange={fetchData}
                style={{
                  height: '140px',
                  border: '2px solid #D6C49A',
                  borderRadius: '12px',
                  paddingTop: '1.5rem',
                  paddingBottom: '.75rem',
                  fontSize: '1.05rem',
                  backgroundColor: '#FFFFFF',
                  resize: 'vertical',
                }}
              />
              <label htmlFor="rulesTextarea" style={{ color: '#B27E6E' }}>
                Rules
              </label>
            </div>

            {/* Description */}
            <div className="form-floating mb-5">
              <textarea
                className="form-control"
                id="descriptionTextarea"
                name="description"
                placeholder="Write the description here"
                value={data.description}
                onChange={fetchData}
                style={{
                  height: '160px',
                  border: '2px solid #D6C49A',
                  borderRadius: '12px',
                  paddingTop: '1.5rem',
                  paddingBottom: '.75rem',
                  fontSize: '1.05rem',
                  backgroundColor: '#FFFFFF',
                  resize: 'vertical',
                }}
              />
              <label htmlFor="descriptionTextarea" style={{ color: '#B27E6E' }}>
                Description
              </label>
            </div>

            <button
              type="submit"
              className="btn"
              style={{
                width: '100%',
                backgroundColor: '#A05239',
                color: '#FFFFFF',
                border: 'none',
                padding: '0.9rem 2rem',
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '12px',
                boxShadow: '0 6px 18px rgba(160,82,57,0.45)',
                transition: 'background-color 0.25s ease, transform 0.15s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#C06A42'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#A05239'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Submit Notice
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default CompetitionNotice
