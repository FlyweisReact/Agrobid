/** @format */

import React, { useState, useEffect, useCallback } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useParams } from "react-router-dom";

const Buyer = () => {
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");
  const { id } = useParams()

  const fetchData = useCallback(async() => {
    try {
      const { data } = await axios.get(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/placebid/getbuyer/63d434a1291761a511615a7e`
      );
      setData(data.details);
      setDataCount(data.details.length);
    } catch (E) {
      console.log(E);
    }
  },[])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Buyer's (Total : {dataCount})
          </span>
        </div>
      </section>

      <div
        style={{
          width: "100%",
          overflowX: "scroll",
        }}
      >
        <Table
          striped
          bordered
          hover
          style={{
            marginTop: "2%",
          }}
        >
          <thead>
            <tr>
              <th>SNo.</th>
              <th>Image</th>
              <th> Name </th>
              <th>trade Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td>
                  <img src={i.photo} alt="" className="fast-food" />
                </td>
                <td> {i.product} </td>
                <td> {i.highestBid} </td>
                <td> {i.BuyerData?.name} </td>
                <td> {i.BuyerData?.phoneNumber} </td>
                <td> {i.quantity} </td>
                <td> {i.bidDetail?.lotId} </td>
                <td> {i.crop} </td>
                <td> {i.bidDetail?.supplierData?.name} </td>
                <td> {i.bidDetail?.supplierData?.phoneNumber} </td>
                <td> {i.status} </td>
                <td>
                  <i
                    class="fa-solid fa-trash"
                    style={{ color: "red", cursor: "pointer" }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Buyer);
