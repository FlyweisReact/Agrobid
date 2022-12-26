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
      <div style={{overflow : 'auto'}}>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Product</th>
                <th>Lot Id</th>
                <th>Quantity</th>
                <th>Pick up location</th>
                <th>Pick up date</th>
            </tr>
        </thead>

        </Table>
      </div>
    </>
  );
};

export default HOC(TranporterLead);
