/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Table } from "react-bootstrap";

const TranporterLead = () => {
  const data = [
    {
      Lot: "4512",
      Product: "Product",
      grade: "Grade",
      Quantity: "5",
      Loc: "Delhi",
      EP: "4512",
      Date: "12/12/1222",
      seller: "Sellor",
      status: "Status",
      pStatus : 'P Status'
    },
  ];
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "black", fontSize: "1.6rem" }}>Transporter Lead</p>
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

      <div style={{ overflow: "auto", marginTop: "2%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Lot Id</th>
              <th>Product</th>
              <th>Grade</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Expected Price</th>
              <th> Date</th>
              <th>Seller Name</th>
              <th>Status</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(TranporterLead);
