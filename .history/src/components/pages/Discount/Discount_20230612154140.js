/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Discount = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://ajeet-backend-new.vercel.app/api/v1/kyc/all"
      );
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterData = !query
    ? data
    : data?.filter(
        (i) =>
          i?.user?.name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.panNumber?.toString()?.toLowerCase().includes(query?.toLowerCase())
      );

  return (
    <>
      {" "}
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Documents
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
            placeholder="Search by Name , Pan number.."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div style={{ overflow: "auto", marginTop: "2%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SNo.</th>
              <th>UserName</th>
              <th>Adhaar Card Number</th>
              <th>Adhaar Card Frontside</th>
              <th>Adhaar Card Backside</th>
              <th>Pan Card Number</th>
              <th>Pan Card</th>
              <th> Gst Number </th>
              <th> Buisness Name </th>
              <th> Address </th>
              <th>City </th>
              <th> Pincode </th>
              <th> Mobile Number </th>
              <th> address proof </th>
              <th> bank Name </th>
              <th> Account Number </th>
              <th>Account Holder Name </th>
              <th> IFSC Code </th>
            </tr>
          </thead>
          <tbody>
            {filterData?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {i.user?.name} </td>
                <td> </td>
                <td>
                  {" "}
                  <img src="" alt="" style={{ width: "100px" }} />{" "}
                </td>
                <td>
                  {" "}
                  <img
                    src={i.panNumber}
                    alt=""
                    style={{ width: "100px" }}
                  />{" "}
                </td>
                <td> {i.panNumber} </td>
                <td>
                  {" "}
                  <img src="" alt="" style={{ width: "100px" }} />{" "}
                </td>
                <td> {i.gstNumber} </td>
                <td> {i.tradeName} </td>
                <td> {i.address} </td>
                <td> {i.city} </td>
                <td> {i.pincode} </td>
                <td> {i.user?.phoneNumber} </td>
                <td>
                  {" "}
                  <img src="" alt="" style={{ width: "100px" }} />{" "}
                </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Discount);
