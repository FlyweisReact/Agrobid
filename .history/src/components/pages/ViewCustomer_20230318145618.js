/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HOC from "../layout/HOC";

const ViewCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // Fetch Data
  const fetchHandler = async () => {
    try {
      const { data } = await axios.get(
        `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/kyc/user/63d424f7291761a511615a06`
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  let UserName = data?.bank?.[1]?.userId?.name;
  let UserRole = data?.bank?.[1]?.userId?.role;

  console.log(data);

  return (
    <>
      <div>
        <p style={{ color: "black", fontSize: "1.5rem" }}>View {UserName} </p>
      </div>

      <div>
        <div className="sup">
          <div className="left">
            <img
              src={data?.bank?.[1]?.userId?.photo ? data?.bank?.[1]?.userId?.photo : '' }
              alt="user"
              style={{ width: "400px" }}
            />
          </div>
          <div className="mid">
            <p>Name : {UserName} </p>
            <p>Trade Name : {data?.bank?.[1]?.userId?.tradeName}</p>
            <p>Email : {data?.bank?.[1]?.userId?.email} </p>
            <p>Location : {data?.bank?.[1]?.userId?.address} </p>
            <p>Role : {UserRole} </p>
          </div>
          <div className="right">
            <p> Bank : {data?.bank?.[0]?.bankName}</p>
            <p> Account Number : {data?.bank?.[0]?.accountNumber}</p>
            <p> Account Holder Name : {data?.bank?.[0]?.accountHolderName}</p>
            <p> IFSC Code : {data?.bank?.[0]?.ifscCode}</p>
          </div>
          <div className="right">
            <button onClick={() => navigate("/discount")} className="btn">
              KYC
            </button>
            <br />
            <br />

            {UserRole === "Buyer" || "Supplier" ? (
              <button
                className="hover-btn"
                onClick={() => navigate(`/products/${UserRole}`)}
              >
                {" "}
                Bid
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(ViewCustomer);
