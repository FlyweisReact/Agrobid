/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { toast } from "react-toastify";

const user = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "React",
    tradeName: "React Developer",
    phone: 9874563214,
    location: "Delhi",
    role: "User",
    email: "React1@gmail.com",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "React",
    tradeName: "React Developer",
    phone: 9874563214,
    location: "Delhi",
    role: "User",
    email: "React1@gmail.com",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "React",
    tradeName: "React Developer",
    phone: 9874563214,
    location: "Delhi",
    role: "User",
    email: "React1@gmail.com",
  },
];

const Customers = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Users
          </span>
        </div>
      </section>

      <div style={{ overflow: "auto", marginTop: "2%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th> Name </th>
              <th>Firm Name</th>
              <th>Location</th>
              <th>Bid</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((i, index) => (
              <tr key={index}>
                <td>
                  <img src={i.image} alt="" className="fast-food" />
                </td>
                <td> {i.name} </td>
                <td> {i.tradeName} </td>
                <td> {i.location} </td>
                <td>Bid</td>
                <td> {i.role} </td>

                <td>
                <i class="fa-solid fa-eye" style={{color : '#0aa0ff'}}></i>
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() => {
                      toast.success("User Deleted Successfully");
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Customers);
