/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HOC from "../layout/HOC";

const ViewCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // Fetch Data
  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        // `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/kyc/user/${id}`
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/kyc/user/63d42519291761a511615a09`
      );
      setData(data);
      console.log(data.data[0])
      
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);


  let UserName = data?.data?.[0]?.user?.name;
  let UserRole = data?.data?.[0]?.user?.role;

  return (
    <>
      <div>
        <p style={{ color: "black", fontSize: "1.5rem" }}>View {UserName} </p>
      </div>

      <div>
        <div className="sup">
          <div className="left">
            <img
              src={
                data?.data?.[0]?.user?.photo
                  ? data?.data?.[0]?.user?.photo
                  : "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=861"
              }
              alt="user"
              style={{ width: "400px" }}
            />
          </div>
          <div className="mid">
            <p>Name : {UserName} </p>
            <p>Trade Name : {data?.data?.[0]?.user?.tradeName}</p>
            <p>Email :{data?.data?.[0]?.user?.tradeName}</p>
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
