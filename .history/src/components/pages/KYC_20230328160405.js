import React from 'react'
import HOC from '../layout/HOC'

const KYC = () => {
  return (
    <>
         <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Documents
          </span>
          <div style={{ color: "black" }}>
            <input
              type="search"
              style={{
                width: "300px",
                border: "1px solid black",
                color: "black",
                padding: "5px",
                height: "40px",
                fontSize: "18px",
              }}
              placeholder='Search by Name , Phone Number....'
              onChange={handlerChange}
            />
          </div>
        </div>
      </section>
      <div style={{ overflow: "auto", marginTop: "2%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SNo.</th>
              <th>UserName</th>
              <th>Adhaar Card Number</th>
              <th>Adhaar Card Frontside</th>
              <th>Adhaar Card Backside</th>
              <th>Pan Card Number</th>
              <th>Pan Card</th>
              <th> Gst Number </th>
              <th> Buisness Name </th>
              <th> Address </th>
              <th>City </th>
              <th> Pincode </th>
              <th> Mobile Number </th>
              <th> address proof </th>
              <th> bank Name </th>
              <th> Account Number </th>
              <th>Account Holder Name </th>
              <th> IFSC Code </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {i.user?.name} </td>
                <td>  </td>
                <td>
                  {" "}
                  <img
                    src=''
                    alt=""
                    style={{ width: "100px" }}
                  />{" "}
                </td>
                <td>
                  {" "}
                  <img
                    src={i.panNumber}
                    alt=""
                    style={{ width: "100px" }}
                  />{" "}
                </td>
                <td> {i.panNumber} </td>
                <td>
                  {" "}
                  <img src='' alt="" style={{ width: "100px" }} />{" "}
                </td>
                <td> {i.gstNumber} </td>
                <td> {i.tradeName} </td>
                <td> {i.address} </td>
                <td> {i.city} </td>
                <td> {i.pincode} </td>
                <td> {i.user?.phoneNumber} </td>
                <td>
                  {" "}
                  <img
                    src=''
                    alt=""
                    style={{ width: "100px" }}
                  />{" "}
                </td>
                <td> </td>
                <td> </td>
                <td>  </td>
                <td> </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default HOC(KYC)