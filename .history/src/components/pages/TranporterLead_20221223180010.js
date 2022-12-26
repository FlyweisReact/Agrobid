/** @format */

import React from "react";
import HOC from "../layout/HOC";
import {Table} from 'react-bootstrap'

const TranporterLead = () => {
  return (
    <>
      <div>
        <p style={{ color: "black", fontSize: "1.6rem" }}>Transporter Lead</p>
      </div>
      <div style={{overflow : 'auto' , marginTop : '2%'}}>
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
                <td>Quantity</th>
                <td>Pick up location</th>
                <td>Pick up date</th>
                <td>Delivery Location</th>
                <th>Delivery Date</th>
                <th>Vehicle Number</th>
                <th>Status</th>
            </tr>
        </tbody>

        </Table>
      </div>
    </>
  );
};

export default HOC(TranporterLead);
