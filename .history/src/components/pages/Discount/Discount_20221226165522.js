/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import {AiOutlineSearch} from 'react-icons/ai'

const Detail = [
  {
    user: "Sri",
    AdhaarNumber: "4521 7854 4545",
    AdhharFrontSide:
      "https://assets-global.website-files.com/5f689f82910c6b4f1ffb855b/613b1f91b195318100f7d27e_aadhar%20card%402x-min.jpg",
    AdhharBackSide:
      "https://5.imimg.com/data5/YS/PN/XY/SELLER-24419352/pvc-aadhaar-card-500x500.jpg",
    panNumber: "4512 4578 1245",
    panCard:
      "https://images.livemint.com/img/2019/10/25/1600x900/pan_card_1565610340828_1572021543426.PNG",
    GST: "dakh45124",
    BuisnessName: "Sk Enterprise",
    address: "Gurgaon",
    City: "Delhi",
    pin: "112245",
    Mobile2: "4512363987",
    addressProff:
      "https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2022/01/07/1010298-driving.jpg?itok=qpRsyHLw",
    bank: "Canara",
    account: "451245785412547",
    holder: "New Name",
    IFSC: "dsad4578",
  },
  {
    user: "Hi",
    AdhaarNumber: "4521 7854 4545",
    AdhharFrontSide:
      "https://assets-global.website-files.com/5f689f82910c6b4f1ffb855b/613b1f91b195318100f7d27e_aadhar%20card%402x-min.jpg",
    AdhharBackSide:
      "https://5.imimg.com/data5/YS/PN/XY/SELLER-24419352/pvc-aadhaar-card-500x500.jpg",
    panNumber: "4512 4578 1245",
    panCard:
      "https://images.livemint.com/img/2019/10/25/1600x900/pan_card_1565610340828_1572021543426.PNG",
    GST: "dakh45124",
    BuisnessName: "Sk Enterprise",
    address: "Gurgaon",
    City: "Delhi",
    pin: "112245",
    Mobile2: "4512363987",
    addressProff:
      "https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2022/01/07/1010298-driving.jpg?itok=qpRsyHLw",
    bank: "Canara",
    account: "451245785412547",
    holder: "New Name",
    IFSC: "dsad4578",
  },
];

const Discount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Serach Bar
   const [query, setQuery] = useState("");

  const handlerChange = (e) => {
    setQuery(e.target.value);
  };

  const filter = !query
    ? data
    : data.filter((i) => i?.Lot?.toLowerCase().includes(query?.toLowerCase()));



  return (
    <>
      {" "}
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Documents
          </span>
          <div style={{color : 'black'}}>
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
            />
           
          </div>
        </div>
      </section>
      <div style={{ overflow: "auto", marginTop: "2%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
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
            {Detail?.map((i, index) => (
              <tr key={index}>
                <td> {i.user} </td>
                <td> {i.AdhaarNumber} </td>
                <td>
                  {" "}
                  <img
                    src={i.AdhharFrontSide}
                    alt=""
                    style={{ width: "100px" }}
                  />{" "}
                </td>
                <td>
                  {" "}
                  <img
                    src={i.AdhharBackSide}
                    alt=""
                    style={{ width: "100px" }}
                  />{" "}
                </td>
                <td> {i.panNumber} </td>
                <td>
                  {" "}
                  <img src={i.panCard} alt="" style={{ width: "100px" }} />{" "}
                </td>
                <td> {i.GST} </td>
                <td> {i.BuisnessName} </td>
                <td> {i.address} </td>
                <td> {i.City} </td>
                <td> {i.pin} </td>
                <td> {i.Mobile2} </td>
                <td>
                  {" "}
                  <img
                    src={i.addressProff}
                    alt=""
                    style={{ width: "100px" }}
                  />{" "}
                </td>
                <td> {i.bank} </td>
                <td> {i.account} </td>
                <td> {i.holder} </td>
                <td> {i.IFSC} </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Discount);
