import React, { useState } from 'react';
import UserHeader from './UserHeader';
import '../../css/Participate.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Participate = () => {

    // 1. Get items from localStorage first
    const id = localStorage.getItem("id") || "";
    const title = localStorage.getItem("title");
    const email = localStorage.getItem("useremail") || "";
    const navigate=useNavigate()


    const APIURL=`http://localhost:8080/user/participate/${email}`


    // 2. Initialize state with those values
    const [data, setData] = useState({
        email: email,
        compId: id,
        title: title,
        content: "",
        phoneNo: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
                  const serverResponse= await axios.post(APIURL,data)
                  if("Participation successful"==(serverResponse.data)){
                  Swal.fire(`${serverResponse.data}`)
                  navigate("/userPage")
                  }
                } catch (error) {
            console.log(error);
            
        }
  
        
        // Add your API call logic here
    };

    return (
        <div className="page-container">
            <UserHeader />
            <div className="form-wrapper">
                <form className="participate-form" onSubmit={handleSubmit}>
                    <h2>Participate in {title}</h2>
                    <p className="subtitle">ID: {data.compId}</p>

                    <div className="input-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={data.email} 
                            readOnly // Email from localStorage is usually read-only
                            className="readonly-input"
                        />
                    </div>

                    <div className="input-group">
                        <label>Phone Number</label>
                        <input 
                            type="tel" 
                            name="phoneNo" 
                            placeholder="e.g. +1 234 567 890"
                            value={data.phoneNo} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label>Your Content / Entry</label>
                        <textarea 
                            name="content" 
                            placeholder="Write your entry here..."
                            value={data.content} 
                            onChange={handleChange} 
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Submit Entry</button>
                </form>
            </div>
        </div>
    );
};

export default Participate;