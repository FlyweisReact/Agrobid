/** @format */

import React from "react";
import { useParams } from "react-router-dom";
import HOC from "../layout/HOC";

const ViewCustomer = () => {
  const { name, role } = useParams();

  return (
    <>
      <div>
        <p style={{ color: "black", fontSize: "1.5rem" }}>View {name} </p>
      </div>
      {role === "Supplier" ? <div>
        
      </div> : ""}
    </>
  );
};

export default HOC(ViewCustomer);
