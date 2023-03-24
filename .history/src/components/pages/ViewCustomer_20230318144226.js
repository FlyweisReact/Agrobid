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
        `ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/kyc/user/63d424f7291761a511615a06`
      );
      setData(data)
    } catch (e) {
      console.log(e);
    }
  };


  useEffect(() => {
    fetchHandler()
  },[])

  return (
    <>
      <div>
        <p style={{ color: "black", fontSize: "1.5rem" }}>View  </p>
      </div>

   
    </>
  );
};

export default HOC(ViewCustomer);
