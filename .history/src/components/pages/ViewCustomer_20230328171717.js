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
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/kyc/user/${id}`
      );
      setData(data);
      console.log(data)
      
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);


  let UserName = data?.data?.[1]?.user?.name;
  let UserRole = data?.data?.[1]?.user?.role;
  let UserId = data?.data?.[1]?.user?._id

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
                data?.data?.[1]?.user?.photo
                  ? data?.data?.[1]?.user?.photo
                  : "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=861"
              }
              alt="user"
              style={{ width: "400px" }}
            />
          </div>
          <div className="mid">
            <p>Name : {UserName} </p>
            <p>Trade Name : {data?.data?.[1]?.user?.tradeName}</p>
            <p>Email :{data?.data?.[1]?.user?.email}</p>
            <p>Location : {data?.data?.[1]?.user?.address} </p>
            <p>Role : {UserRole} </p>
          </div>
          <div className="right">
            <p> Bank : {data?.bank?.[1]?.bankName}</p>
            <p> Account Number : {data?.bank?.[1]?.accountNumber}</p>
            <p> Account Holder Name : {data?.bank?.[1]?.accountHolderName}</p>
            <p> IFSC Code : {data?.bank?.[1]?.ifscCode}</p>
          </div>
          <div className="right">
            <button onClick={() => navigate(`/kyc/${UserId}`)} className="btn">
              KYC
            </button>
            <br />
            <br />

            {UserRole === "Buyer" ?     <button
                className="hover-btn"
                onClick={() => navigate(`/buyer/bid/${UserId}`)}
              >
                {" "}
                Bid
              </button> :""}
            {UserRole === "Supplier" ?     <button
                className="hover-btn"
                onClick={() => navigate(`/products/${UserRole}`)}
              >
                {" "}
                Bid
              </button> :""}
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(ViewCustomer);