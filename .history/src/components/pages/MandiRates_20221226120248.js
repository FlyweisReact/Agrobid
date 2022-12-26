/** @format */

import React from "react";
import HOC from "../layout/HOC";

const MandiRates = () => {
 
  return (
    <>
    <div>
      <p style={{color : 'black' , fontSize : '1.5rem' }}>Mandi Rates</p>
    </div>
    <div style={{marginTop : '2%' , overflow : 'auto'}}>
      <Tab
    </div>
    </>
  );
};

export default HOC(MandiRates);
