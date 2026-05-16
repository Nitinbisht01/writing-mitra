import React from 'react'

const FetchBlogDetail = ({blogArray,userBlogs}) => {
  return (
    <>
   {
    blogArray.map((b)=>{
    return(
        <>
         <div className="card m-5" key={b.id} style={{width: "18rem"}}>
  <div className="card-body">
        
            <h5 className="card-title">{b.title}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{b.category}</h6>
    <p className="card-text">{b.content}</p>
    <button onClick={()=>{userBlogs(b.email)}}
  
     className=" btn btn-link" >  {`posted By ${b.user?.name || "the Author"}`}</button>
    
        </div>
        </div>
            
        </>
    )

  }  )}

  
    </>
  )
}

export default FetchBlogDetail