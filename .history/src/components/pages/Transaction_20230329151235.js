import React from 'react'
import HOC from '../layout/HOC'
import { Table } from 'react-bootstrap'

const Transaction = () => {
  return (
   <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Transaction
          </span>
        </div>
      </section>

      <div
        style={{
          width: "100%",
          overflowX: "scroll",
        }}
      >
        <Table
          striped
          bordered
          hover
       
        >
          <thead>
            <tr>
              <th>SNo.</th>
              <th>User</th>
              <th>Supplier</th>
              <th>Crop</th>
              <th>Comment</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
      
          </tbody>
        </Table>
      </div>
   </>
  )
}

export default HOC(Transaction)