/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const Transaction = () => {

  const {  id } = useParams()
  const [ data , setData ] = useState([])

  const fetchData = useCallback(async () => {
    try {
       const { data } = await axios.get(`https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/placebid/payment/supplier/${id}`)
      setData(data)
      console.log(data)
    }catch(e) { 
      console.log(e)
    }
  },[ id])

  useEffect(() => {
    fetchData()
    
  },[fetchData])

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Transaction
          </span>
        </div>
      </section>

      <div
        style={{
          width: "100%",
          overflowX: "scroll",
        }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Trade Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
          {data?.result?.map((i , index) => (
            <tr key={index}>
              <td> {i.buyerId?.name} </td>

            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Transaction);
