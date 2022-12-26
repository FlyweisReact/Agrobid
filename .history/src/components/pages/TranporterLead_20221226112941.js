/** @format */

import React from "react";
import HOC from "../layout/HOC";
import { Table } from "react-bootstrap";

const TranporterLead = () => {
  return (
    <>
      <div style={{display : 'flex' , justifyContent : 'spa'}}>
        <p style={{ color: "black", fontSize: "1.6rem" }}>Transporter Lead</p>
        <input
          type="search"
          style={{
            width: "300px",
            border: "1px solid black",
            color: "black",
            padding: "5px",
            fontSize : '18px',
          }}
        />
      </div>

      <div style={{ overflow: "auto", marginTop: "2%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Lot Id</th>
              <th>Quantity</th>
              <th>Pick up location</th>
              <th>Pick up date</th>
              <th>Delivery Location</th>
              <th>Delivery Date</th>
              <th>Vehicle Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product</td>
              <td>Lot Id</td>
              <td>Quantity</td>
              <td>Pick up location</td>
              <td>Pick up date</td>
              <td>Delivery Location</td>
              <td>Delivery Date</td>
              <td>Vehicle Number</td>
              <td>Status</td>
            </tr>
            <tr>
              <td>Product</td>
              <td>Lot Id</td>
              <td>Quantity</td>
              <td>Pick up location</td>
              <td>Pick up date</td>
              <td>Delivery Location</td>
              <td>Delivery Date</td>
              <td>Vehicle Number</td>
              <td>Status</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(TranporterLead);
