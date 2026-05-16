import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AdminHeader from './AdminHeader'


function ProfileUpload() {

    const navigate = useNavigate()
    const UPLOADURL = "http://localhost:8080/admin/uploadPic"

    const [profilePic, setProfilePic] = useState(null)
    const email = localStorage.getItem("adminEmail")

    const [profileData, setProfileData] = useState({
        email: email,
        description: ""
    })

    const fetchData = (e) => {

        const { name, value, files, type } = e.target//destructure of the target object

        //files is the array of file taken
        if (type === "file") {
            setProfilePic(files[0])
        } else {
            setProfileData({ ...profileData, [name]: value })
        }
    }

    const submitForm = async (e) => {

        e.preventDefault()

        const formData = new FormData()//object creation of form data which carry documnet type data
        //as well as text data

        formData.append(
            "profileImageDetail",
            new Blob([JSON.stringify(profileData)], { type: 'application/json' })
        )

        formData.append("imageFile", profilePic)

        try {

            const serverResponse = await axios.post(UPLOADURL, formData)

            navigate("/aD", {
                state: { imageURL: serverResponse.data.imageURL }
            })

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <AdminHeader />

            <div className="d-flex justify-content-center align-items-center" style={{marginTop:"100px"}}>

                <div className="card shadow-lg p-4" style={{ width: "450px", borderRadius: "15px" }}>

                    <h3 className="text-center mb-4 text-dark">
                        Upload Profile Picture
                    </h3>

                    <form onSubmit={submitForm}>

                        <div className="mb-3">
                            <label className="form-label fw-bold">
                                Select Image
                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                name="profilePic"
                                className="form-control"
                                onChange={fetchData}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold">
                                Description
                            </label>

                            <textarea
                                name="description"
                                className="form-control"
                                rows="4"
                                placeholder="Write something about your profile..."
                                onChange={fetchData}
                                value={profileData.description}
                            />
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="btn btn-dark px-4">
                                Upload Image
                            </button>
                        </div>

                    </form>

                </div>

            </div>
        </>
    )
}

export default ProfileUpload