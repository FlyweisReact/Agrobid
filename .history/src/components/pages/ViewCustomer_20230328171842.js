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
      setData(data);
      console.log(data)
      
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
        <p style={{ color: "black", fontSize: "1.5rem" }}>View {data?.details?.} </p>
      </div>


 
    </>
  );
};

export default HOC(ViewCustomer);
