/** @format */

import React, { useState, useCallback, useEffect } from "react";
import HOC from "../layout/HOC";
import { useParams } from "react-router-dom";
import axios from "axios";

const KYC = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  // Fetch Data
  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/kyc/user/${id}`
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  let UserName = data?.data?.[1]?.user?.name;
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            {UserName} Document
          </span>
        </div>
      </section>

      <div>
        <div className="sup">
          <div className="left">
            <img
              src={
                data?.data?.[1]?.user?.photo
                  ? data?.data?.[1]?.user?.photo
                  : ""
              }
              alt="user"
            />
            <img
              src={
                data?.data?.[1]?.aadharFrontImage
                  ? data?.data?.[1]?.aadharFrontImage
                  : ""
              }
              alt="user"
            />
            <img
              src={
                data?.data?.[1]?.panImage
                  ? data?.data?.[1]?.panImage
                  : ""
              }
              alt="user"
            />
          </div>
          <div className="mid">
            <p>Name : {UserName} </p>
            <p>Phone Number: {data?.data?.[1]?.user?.phoneNumber} </p>
            <p>Address : {data?.data?.[1]?.user?.address} </p>
            <p>Email : {data?.data?.[1]?.user?.email} </p>
            <p>Trade Name : {data?.data?.[1]?.user?.tradeName} </p>
            <p>Role : {data?.data?.[1]?.user?.role} </p>
          </div>
          <div className="mid">
            <p>Adhaar Number : {data?.data?.[1]?.aadharNumber} </p>
            <p>Pan Number :{data?.data?.[1]?.panNumber} </p>
            <p>City :{data?.data?.[1]?.city} </p>
            <p>District :{data?.data?.[1]?.district} </p>
            <p>Gst Number :{data?.data?.[1]?.gstNumber} </p>
            <p>Pin Code : {data?.data?.[1]?.pincode} </p>
            <p>State :{data?.data?.[1]?.state} </p>
          </div>
          <div className="right">
            <p> Bank : {data?.bank?.[1]?.bankName}</p>
            <p> Account Number : {data?.bank?.[1]?.accountNumber}</p>
            <p> Account Holder Name : {data?.bank?.[1]?.accountHolderName}</p>
            <p> IFSC Code : {data?.bank?.[1]?.ifscCode}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(KYC);
