import React from 'react'
import '../../css/showall.css'

const ContactDetails = ({contactArray,deleteById}) => {
  return (
    <>

    <div className="tile-table-wrapper">
  <table className="table tile-table">
  <thead>
    <tr>
      <th scope="col">Serial</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Question</th>
      <th scope="col">Select</th>
    </tr>
  </thead>
  <tbody>
    {
        contactArray.map((cobj)=>{
            return(
              
                     <tr key={cobj.id}>
                <td>{cobj.id}</td>
                <td>{cobj.name}</td>
                <td>{cobj.email}</td>
                <td>{cobj.phone}</td>
                <td>{cobj.question}</td>
                <th><button className='btn btn-danger' onClick={
                    ()=>{deleteById(cobj.id)}
                    }>delete</button></th>

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

export default ContactDetails