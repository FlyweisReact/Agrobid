/** @format */

import React from "react";
import { Button } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";

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
            <th>Image</th>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Variants</th>
            <th>Category</th>
            <th>MRP</th>
            <th>Actions</th>
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
              <td>{i.crop}</td>
              <td>{i.crop}</td>
              <td>{i.crop}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Products);
