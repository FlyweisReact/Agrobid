/** @format */

import React, { useState, useEffect } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Buyer = () => {
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/admin/buyer"
      );
      setData(data);
      setDataCount(data.message.length);
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            {data?.message?.map((i, index) => (
              <tr key={index}>
                <td> {index} </td>
                <td>
                  <img src={i.photo} alt="" className="fast-food" />
                </td>
                <td> {i.name} </td>
                <td> {i.tradeName} </td>
                <td> {i.email} </td>
                <td> {i.phoneNumber} </td>
                <td> {i.address} </td>
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
