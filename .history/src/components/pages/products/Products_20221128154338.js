import React from "react";
import { Button } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";


const Products = () => {


  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Bids
          </span>
          <Button
            variant="outline-success"
          >
            Add Product
          </Button>
        </div>
      </section>
      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "5%",
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
        
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Products);
