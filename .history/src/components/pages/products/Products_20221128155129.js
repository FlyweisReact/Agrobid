/** @format */

import React from "react";
import { Button } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillEdit ,AiFillDelete } from "react-icons/ai";

const Bid = [
  {
    crop: "Apple",
    location: "Delhi",
    grade: "B",
    variety: "Good",
    quantity: "20 Ton",
    rate: 10000,
    totalBag: 45,
    eRate: 14000,
  },
  {
    crop: "Apple",
    location: "Delhi",
    grade: "B",
    variety: "Good",
    quantity: "20 Ton",
    rate: 10000,
    totalBag: 45,
    eRate: 14000,
  },
];

const Products = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Bids
          </span>
          <Button variant="outline-success">Create Bid</Button>
        </div>
      </section>
      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "2%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>Crop</th>
            <th>location</th>
            <th>Grade</th>
            <th>Variety</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Total Bags</th>
            <th>Expected Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Bid.map((i, index) => (
            <tr key={index}>
              <td>{i.crop}</td>
              <td>{i.location}</td>
              <td>{i.grade}</td>
              <td>{i.variety}</td>
              <td>{i.quantity}</td>
              <td>{i.rate}</td>
              <td>{i.totalBag}</td>
              <td>{i.eRate}</td>
              <td style={{ display: "flex", gap: "10px" }}>
                <AiFillEdit color='blue' cursor={} />
                <AiFillDelete />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Products);
