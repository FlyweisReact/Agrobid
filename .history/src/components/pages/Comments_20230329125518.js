import React from 'react'
import HOC from '../layout/HOC'

const Comments = () => {
  return (
   <>
       <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Comments (Total : {})
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
              <th>Image</th>
              <th> Name </th>
              <th>trade Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.message?.map((i, index) => (
              <tr key={index}>
                <td> {index} </td>
                <td>
                  <img src={i.photo} alt="" className="fast-food" />
                </td>
                <td>
                <Link to={`/customer/${i._id}`}>
                {i.name}
                </Link>
              </td>
                <td> {i.tradeName} </td>
                <td> {i.email} </td>
                <td> {i.phoneNumber} </td>
                <td> {i.address} </td>
                <td>
              <div className="d-flex gap-2">
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => deleteHandler(i._id)}
                  ></i>
              </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

   </>
  )
}

export default HOC(Comments)