/** @format */

import React, { useState, useEffect } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Buyer = () => {
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/admin/buyer"
      );
      setData(data);
      setDataCount(data.message.length)
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try{
      const { data } = await axios.delete(`https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/auth/delete/${id}`)
      toast.success(data.message)
      fetchData()
    }catch(e) {
      console.log(e)
    }
  }

  const filterData = !query
  ? data?.message
  : data?.message?.filter(
      (i) =>
        i?.tradeName?.toLowerCase().includes(query?.toLowerCase()) ||
        i?.phoneNumber
          ?.toString()
          ?.toLowerCase()
          .includes(query?.toLowerCase())
    );






  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Buyer's (Total : {dataCount})
          </span>
        </div>
      </section>

      <div style={{ marginTop: "2%" }}>
        <div style={{ color: "black" }}>
          Search:{" "}
          <input
            type={"search"}
            style={{
              border: "1px solid #bfbfbf",
              width: "250px",
              color: "black",
              padding: "5px",
            }}
            placeholder="Search by Name , Phone number.."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

            {
              filterData === 'No Data' ? 
              <Alert>No Buyer Found</Alert> : 
            }


    </>
  );
};

export default HOC(Buyer);
