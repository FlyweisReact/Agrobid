/** @format */

import React from "react";
import HOC from "../layout/HOC";
import {} from 'react-bootstrap'

const TranporterLead = () => {
  return (
    <>
      <div>
        <p style={{ color: "black", fontSize: "1.6rem" }}>Transporter Lead</p>
      </div>
      <div style={{overflow : 'auto'}}>
        <Table>

        </Table>
      </div>
    </>
  );
};

export default HOC(TranporterLead);
