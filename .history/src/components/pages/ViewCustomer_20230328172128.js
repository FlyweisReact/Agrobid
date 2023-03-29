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
      // const { data } = await axios.get(
      //   `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/kyc/user/${id}`
      // );
      const { data } = await axios.get(`https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/auth/${id}`)
      setData(data.details); 
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);


  // let UserName = data?.data?.[1]?.user?.name;
  // let UserRole = data?.data?.[1]?.user?.role;
  // let UserId = data?.data?.[1]?.user?._id

  return (
    <>
      {/* <div>
        <p style={{ color: "black", fontSize: "1.5rem" }}>View {UserName} </p>
      </div> */}
      <div>
        <p style={{ color: "black", fontSize: "1.5rem" }}>View {data?.name} </p>
      </div>


      <div>
        <div className="sup">
          <div className="mid">
            <p>Name : {data?.name} </p>
            <p>Trade Name : {data?.phoneNumber} </p>
            <p>Email :{data?.name} </p>
            <p>Location : {data?.name}  </p>
            <p>Role :{data?.name} </p>
          </div>
       
          <div className="right">
            <button onClick={() => navigate(`/kyc/${data?._id}`)} className="btn">
              KYC
            </button>
            <br />
            <br />

            {data?.role === "Buyer" ?     <button
                className="hover-btn"
                onClick={() => navigate(`/buyer/bid/${data?._id}`)}
              >
                {" "}
                Bid
              </button> :""}
            {data?.role === "Supplier" ?     <button
                className="hover-btn"
                onClick={() => navigate(`/products/${data?._id}`)}
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
