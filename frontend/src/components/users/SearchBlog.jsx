import React, { useState } from 'react'
import UserHeader from './UserHeader'
import axios from 'axios'
import FetchBlogDetail from './FetchBlogDetail'

function SearchBlog() {

//   const [fetchBlog, setFetchBlog] = useState([])
  const [category, setCategory] = useState("")
  const[blog,setBlog]=useState([])

  


  const fetchData=(e)=>{


setCategory(e.target.value)

  }

  const submitForm=async(e)=>{


e.preventDefault()
    console.log(category);

    try{

      const APIURL = `http://localhost:8080/user/search/${category}`
      console.log(APIURL);
      
    const serverResponse=  await axios.get(APIURL)
    setBlog(serverResponse.data);
    console.log(serverResponse.data);

    
    }
    catch(error)
    {
    console.log(error);
    
    }

    
  }
 const ShowBlogs = async (email) => {
  const GETAPIURL = `http://localhost:8080/user/se/${email}`
  try {
    const response = await axios.get(GETAPIURL)
    setBlog(response.data);
  } catch (error) {
    console.log(error)
  }
}

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const serverResponse = await axios.get(APIURL)
  //       setFetchBlog(serverResponse.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   fetchData()
  // }, [])   // 🔥 important

  return (
    <>
      <UserHeader />

<div style={{marginTop:"100px"}}>
  <div >

<form  onSubmit={submitForm}>

       <select className="form-select" aria-label="Default select example" name="category"  onChange={fetchData} >
  <option > Select Category</option>
  
                <option value="Poem">Poem</option>
                <option value="Shayari">Shayari</option>
                <option value="Ghazal">Ghazal</option>
                </select>


<button  className='btn btn-success'>Go</button>
</form>
</div >

       <div className='binder'><FetchBlogDetail 
        blogArray={blog} 
           userBlogs={ShowBlogs}
      /> </div>
      </div>
    </>
  )
}


export default SearchBlog