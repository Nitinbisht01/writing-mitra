import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import UserHeader from "./UserHeader";
import { useNavigate } from "react-router-dom";
import "../../css/style.css";

const CreateBlog = () => {
  const APIURL = "http://localhost:8080/user/newBlog";
  const Email = localStorage.getItem("useremail") || "";

  const navigate=useNavigate();
  const [blogData, setBlogData] = useState({
    title: "",
    category: "",
    email: Email,
    content: "",
  });

  const fetchData = (e) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const serverResponse = await axios.post(APIURL, blogData);
      Swal.fire(serverResponse.data);
      if(serverResponse.data=="blog Saved successfully") 
        navigate("/userPage")
    } catch (error) {
      console.log(error);
      Swal.fire("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <UserHeader />

      <div className="create-blog-page">
        <div className="editor-shell">
          <form id="create-blog-form" onSubmit={submitForm}>
            {/* Title */}
            <input
              type="text"
              name="title"
              className="editor-title"
              placeholder="Give your post a working title…"
              value={blogData.title}
              onChange={fetchData}
              required
            />

            {/* Category + Email row */}
            <div className="editor-row compact-row">
             <div class="form-floating">
                  <select class="form-select"  aria-label="Floating label select example"
                  name='category'
                  value={blogData.category}
                  >
                    <option selected></option>
                    <option value="Ghazal">Ghazal</option>
                    <option value="Shayari">Shayari</option>
                    <option value="Poem">Poem</option>
                     <option value="Story">Story</option>
                  </select>
                  <label for="floatingSelect">Category</label>
                </div>

              <div className="form-floating custom-floating">
                <input
                  type="email"
                  className="form-control custom-control"
                  id="blogEmail"
                  name="email"
                  value={blogData.email}
                  readOnly
                />
                <label htmlFor="blogEmail">Email</label>
              </div>
            </div>

            {/* Big content area */}
            <div className="editor-body-wrapper">
              <label className="body-label">Write your thoughts</label>
              <textarea
                name="content"
                className="editor-body"
                placeholder="Start writing your story here…"
                value={blogData.content}
                onChange={fetchData}
              ></textarea>
            </div>

            {/* Actions */}
            <div className="editor-actions-bottom">
              <button type="submit" className="btn-publish">
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        :root {
          --bg-page: #FFF9F2;
          --panel-paper: #FFFFFF;
          --panel-border: rgba(222,184,135,0.7);
          --text-main: #82716E;
          --accent-orange: #D67C4E;
          --accent-blue: #6495ED;
        }

        body {
          background-color: var(--bg-page);
          color: var(--text-main);
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .create-blog-page {
          min-height: 100vh;
          padding: 96px 12px 40px;
          background-color: var(--bg-page);
        }

        .editor-shell {
          max-width: 1160px;
          margin: 0 auto;
          padding: 32px 40px 32px;
          background: var(--panel-paper);
          border-radius: 18px;
          border: 1px solid var(--panel-border);
          box-shadow: 0 18px 46px rgba(0,0,0,0.08);
        }

        .editor-title {
          width: 100%;
          margin: 4px 0 22px;
          padding: 8px 0;
          font-size: 30px;
          font-weight: 600;
          border: none;
          border-bottom: 1px solid rgba(222,184,135,0.7);
          background: transparent;
          color: var(--text-main);
        }

        .editor-title::placeholder {
          color: rgba(130,113,110,0.55);
        }

        .editor-title:focus {
          outline: none;
          border-bottom: 2px solid var(--accent-orange);
        }

        .editor-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 22px;
        }

        .compact-row {
          margin-bottom: 24px;
        }

        .custom-floating {
          font-size: 14px;
        }

        .custom-control {
          border-radius: 12px;
          border: 1px solid rgba(222,184,135,0.9);
          background-color: #FFFEFB;
          color: var(--text-main);
        }

        .custom-control:focus {
          border-color: var(--accent-orange);
          box-shadow: 0 0 0 2px rgba(214,124,78,0.18);
        }

        .editor-body-wrapper {
          max-width: 820px;
          margin: 8px auto 0;
        }

        .body-label {
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
          color: rgba(130,113,110,0.9);
        }

        .editor-body {
          width: 100%;
          min-height: 420px;
          border-radius: 16px;
          border: 1px solid rgba(222,184,135,0.9);
          padding: 18px 18px;
          font-size: 16px;
          line-height: 1.7;
          background-color: #FFFEFB;
          resize: vertical;
          color: var(--text-main);
        }

        .editor-body::placeholder {
          color: rgba(130,113,110,0.5);
        }

        .editor-body:focus {
          outline: none;
          border-color: var(--accent-orange);
          box-shadow: 0 0 0 2px rgba(214,124,78,0.18);
        }

        .editor-actions-bottom {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
        }

        .btn-publish {
          border-radius: 999px;
          padding: 8px 22px;
          background: var(--accent-orange);
          color: #ffffff;
          border: none;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }

        .btn-publish:hover {
          background: #C66D40;
          box-shadow: 0 6px 18px rgba(214,124,78,0.35);
        }

        @media (max-width: 768px) {
          .editor-shell {
            padding: 22px 16px 24px;
          }

          .editor-row {
            grid-template-columns: 1fr;
          }

          .editor-body-wrapper {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default CreateBlog;
