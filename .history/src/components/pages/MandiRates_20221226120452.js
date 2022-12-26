/** @format */

import React from "react";
import { Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const MandiRates = () => {
  return (
    <>
      <div>
        <p style={{ color: "black", fontSize: "1.5rem" }}>Mandi Rates</p>
      </div>
      <div style={{ marginTop: "2%", overflow: "auto" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Location</th>
              <th>Date</th>
              <th>Arrival</th>
              <th>Min Price</th>
              <th>Max Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product1</td>
              <td>Delhi</td>
              <td>12/10/2022</td>
              <td>11/20</td>
              <td>Product1</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(MandiRates);
