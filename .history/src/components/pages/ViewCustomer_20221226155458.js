/** @format */

import React from "react";
import { Table } from "react-bootstrap";
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
          <div className="sup">
            <div className="left">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="mid">
              <p>Name : {name} </p>
              <p>Trade Name : Abhishek Supplier</p>
              <p>Email : Abhishek@gmail.com </p>
              <p>Location : Delhi </p>
              <p>Role : Supplier </p>
            </div>
            <div className="right">
              <p> Bank : Canara</p>
              <p> Account Number : 515414257896</p>
              <p> Account Holder Name : Abhishek</p>
              <p> IFSC Code : CANs4512</p>
            </div>
          </div>

          <div>
            <Table striped bordered hover>
              <thead>
                <th>Lot Id</th>
                <th>Crop</th>
                <th>Buyer Bid</th>
                <th>Quantity</th>
                <th>Quantity</th>
              </thead>
            </Table>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HOC(ViewCustomer);
