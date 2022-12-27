/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
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

      <div style={{overflow : 'auto' , marginTop : '2%'}} >

      </div>

    </>
  );
};

export default HOC(Customers);
