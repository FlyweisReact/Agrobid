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
      {role === "Supplier" ? (
        <div>
          <div className='sup'>
          <div className="left">
          <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
              alt=""
              style={{width : '400px'}}
            />
          </div>
          <div className="mid">

          </div>
          <div className="rigth">

          </div>
           
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HOC(ViewCustomer);
