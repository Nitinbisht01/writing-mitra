import React from 'react'

const UserDetails = ({userArray}) => {
  return (
    <>
    <div className="tile-table-wrapper">
        <table className="table tile-table">
            <thead>
                <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Password</th>
      <th scope="col">City</th>
    </tr>
  </thead>
  <tbody>
    {
        userArray.map((uobj)=>{
            return(
              
                     <tr key={uobj.email}>
                
                <td>{uobj.name}</td>
                <td>{uobj.email}</td>
                <td>{uobj.phone}</td>
                <td>{uobj.password}</td>
                <td>{uobj.city}</td>
                

            </tr>   
            )

            })

        }
        </tbody>
        </table>
    </div>
    </>
  )
}

export default UserDetails