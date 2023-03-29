/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Customers = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/admin/users"
      );
      setData(data);
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              <td>SNo.</td>
              <th>Image</th>
              <th> Name </th>
              <th> Phone Number </th>
              <th> Email </th>
              <th>Trade Name</th>
              <th>Location</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.users?.map((i, index) => (
              <tr key={index}>
                <td> {index} </td>
                <td>
                  <img src={i.photo} alt="" className="fast-food" />
                </td>
                <td> {i.name} </td>
                <td> {i.phoneNumber} </td>
                <td> {i.tradeName} </td>
                <td> {i.tradeName} </td>
                <td> {i.location} </td>

                <td> {i.role} </td>

                <td style={{ display: "flex", gap: "10px" }}>
                  <i
                    class="fa-solid fa-eye"
                    style={{ color: "#0aa0ff", cursor: "pointer" }}
                    onClick={() =>
                      navigate(`/customer/${i.name}/role/${i.role}`)
                    }
                  ></i>
                  <i
                    class="fa-solid fa-trash"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() =>
                      toast.success(`${i.name} deleted successfully`)
                    }
                  ></i>
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
