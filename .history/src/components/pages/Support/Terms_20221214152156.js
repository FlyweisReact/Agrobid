import React from 'react'
import HOC from '../../layout/HOC'
import Table from 'react-bootstrap/Table';

const Terms = () => {
  return (
   <>
     <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Terms&Condition
          </span>
        </div>
      </section>

      <Table striped bordered hover style={{marginTop : '2%'}}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
       
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
   </>
  )
}

export default HOC(Terms)