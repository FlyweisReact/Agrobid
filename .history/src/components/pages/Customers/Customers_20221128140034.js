/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

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
            <th> Name </th>
            <th>trade Name</th>
            <th> Email</th>
            <th>Company Address</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {user.map((i , index) => (
          <tr key={index}>
          <td>
            <img src={i.image } alt=''  className="fast-food"/>
          </td>
            <td> {i.name} </td>
            <td> {i.companyName} </td>
            <td> {i.phoneNumber} </td>
            <td> {i.companyEmail} </td>
            <td> {i.companyAddress} </td>
            <td> {i.role} </td>

            <td>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {" "}
                <AiOutlineEdit color="black" cursor="pointer" />
                <AiFillDelete color="red" cursor="pointer" />
              </div>
            </td>
          </tr>
        ) )}
    
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Customers);
