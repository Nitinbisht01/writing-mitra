import React from 'react'

const FeedbackDetails = ({FeedbackArray}) => {
  
  return (
    <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Serial</th>
      
      <th scope="col">Email</th>
      <th scope="col">rating</th>
      <th scope="col">Question</th>
    </tr>
  </thead>
  <tbody>
    {
        FeedbackArray.map((fobj)=>{
            return(
              
                     <tr key={fobj.id}>
                <td>{fobj.id}</td>
                
                <td>{fobj.email}</td>
                <td>{fobj.rating}</td>
                <td>{fobj.question}</td>

            </tr>   
                
            
            )

        })
    }
    </tbody>
    </table>

    </>
  )
}

export default FeedbackDetails