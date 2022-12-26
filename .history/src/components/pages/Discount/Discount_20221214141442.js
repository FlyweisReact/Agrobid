/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";

const Detail = [
  {
    user : 'Sri' , 
    AdhaarNumber : '4521785445' ,
    AdhharFrontSide : ''
  }
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
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Discount);
