import React from "react";
import { Button } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const Products = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://admil-panel2.herokuapp.com/products",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(data);
      } catch (err) {
        console.log(err);
        toast.error("err", err);
      }
    };
    fetchData();
  }, [axios, token, toast]);

  const navigate = useNavigate();

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Products
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
