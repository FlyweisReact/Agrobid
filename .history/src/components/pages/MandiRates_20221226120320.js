/** @format */

import React from "react";
import { Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const MandiRates = () => {
 
  return (
    <>
    <div>
      <p style={{color : 'black' , fontSize : '1.5rem' }}>Mandi Rates</p>
    </div>
    <div style={{marginTop : '2%' , overflow : 'auto'}}>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Product</th>
        </tr>
      </thead>

      </Table>
    </div>
    </>
  );
};

export default HOC(MandiRates);
