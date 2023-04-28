import React from 'react'
import HOC from '../layout/HOC'

const Transaction = () => {
  return (
   <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Comments (Total : {data?.length})
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
          style={{
            marginTop: "2%",
          }}
        >
          <thead>
            <tr>
              <th>SNo.</th>
              <th>User Name</th>
              <th>Phone Number</th>
              <th>Image</th>
              <th>Comment</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {i.userId?.name} </td>
                <td> {i.userId?.phoneNumber} </td>
                <td>
                  {" "}
                  <img
                    src={i.userId?.photo}
                    alt=""
                    style={{ width: "100px" }}
                  />{" "}
                </td>
                <td> {i.comment} </td>
                <td> {i.rating} </td>
                <td>
                <i className="fa-solid fa-trash" style={{color : 'red' , cursor : 'pointer'}}
                onClick={() => deleteHandler(i._id)}
                 ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
   </>
  )
}

export default HOC(Transaction)