/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const vehicle = [
  {
    Vnumber: 124521,
    Clocation: "delhi",
    af: "Truck",
    capacity: "2MT",
    Route: [" Delhi ", "Mumbai ", "Cheenai"],
  },
];

const Service = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Services
          </span>

          <Button variant="success">Add Service</Button>
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
            <th>Vehicle Number</th>
            <th>Current Location</th>
            <th>Atach Fleet</th>
            <th>Capacity</th>
            <th>Vehicle Route </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicle.map((i , index) => (
            <tr key={index}>
              <td> {i.Vnumber}</td>
              <td>₹{i.Clocation} </td>
              <td> {i.summary} </td>
              <td> {i.description} </td>
              <td> {i.slug} </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <AiOutlineEdit color="black" cursor="pointer" />
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() =>
                      toast.success("Transport Deleted Successfully")
                    }
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Service);
