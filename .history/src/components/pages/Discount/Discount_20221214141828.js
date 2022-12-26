/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";

const Detail = [
  {
    user: "Sri",
    AdhaarNumber: "4521 785445",
    AdhharFrontSide:
      "https://assets-global.website-files.com/5f689f82910c6b4f1ffb855b/613b1f91b195318100f7d27e_aadhar%20card%402x-min.jpg",
    AdhharBackSide:
      "https://5.imimg.com/data5/YS/PN/XY/SELLER-24419352/pvc-aadhaar-card-500x500.jpg",
      panNumber : '4512 4578 1245'
  },
];

const Discount = () => {
  return (
    <>
      {" "}
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Documents
          </span>
        </div>
      </section>
      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "5%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>UserName</th>
            <th>Adhaar Card Number</th>
            <th>Adhaar Card Frontside</th>
            <th>Adhaar Card Backside</th>
            <th>Pan Card</th>
            <th> Gst Number </th>
            <th> Trade Name </th>
            <th> RC </th>
          </tr>
        </thead>
        <tbody>
          {Detail.map((i, index) => (
            <tr key={index}>
              <td> {i.user} </td>
              <td> {i.AdhaarNumber} </td>
              <td>
                {" "}
                <img
                  src={i.AdhharFrontSide}
                  alt=""
                  className="fast-food"
                />{" "}
              </td>
              <td>
              {" "}
                <img
                  src={i.AdhharBackSide}
                  alt=""
                  className="fast-food"
                />{" "} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Discount);
