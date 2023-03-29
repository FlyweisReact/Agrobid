import React, { useState, useEffect, useCallback } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useParams } from "react-router-dom";

const BuyerBid = () => {
  const [data, setData] = useState([]);
  const { id } = useParams()

  const fetchData = useCallback(async() => {
    try {
      const { data } = await axios.get(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/placebid/getbuyer/${id}`
      );
      setData(data.details);
    } catch (E) {
      console.log(E);
    }
  },[id])

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
        
    </>
  )
}

export default HOC(BuyerBid)