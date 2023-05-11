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
      setDataCount(data.message.length);
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/auth/delete/${id}`
      );
      toast.success(data.message);
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

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

 

      {filterData === "No Data" ? (
        <Alert>No Buyer Found</Alert>
      ) : (
       <>
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
              {filterData?.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td>
                    <img src={i.photo} alt="" className="fast-food" />
                  </td>
                  <td>
                    <Link to={`/customer/${i._id}`}>{i.tradeName}</Link>
                  </td>
                  <td> {i.tradeName} </td>
                  <td> {i.email} </td>
                  <td> {i.phoneNumber} </td>
                  <td>
                    {" "}
                    {i.address?.[0]?.homeaddress + i.address?.[0]?.city}{" "}
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteHandler(i._id)}
                      ></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

       </>
      )}
    </>
  );
};

export default HOC(Buyer);
