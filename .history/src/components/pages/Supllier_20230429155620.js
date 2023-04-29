/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Supllier = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/admin/supplier"
      );
      setData(data.message);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try{
      const { data } = await axios.delete(`https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/auth/delete/${id}`)
      toast.success(data.message)
      fetchData()
    }catch(e) {
      console.log(e)
    }
  }

  const filterData = !query
    ? data
    : data?.filter(
        (i) =>
          i?.tradeName?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.phoneNumber
            ?.toString()
            ?.toLowerCase()
            .includes(query?.toLowerCase())
      );


  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Supplier's (Total : {data?.length})
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
            placeholder="Search by Name , Phone number.."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div
     style={{width: '100%' , overflow : 'auto'}}
      >
        <Table striped bordered hover >
          <thead >
            <tr>
              <th > SNo. </th>
              <th > Image </th>
              <th > Name</th>
              <th >Phone Number</th>
              <th >Address</th>
              <th >Email</th>
              <th >Trade Name</th>
              <th >Role</th>
              <th >Action</th>
            </tr>
          </thead>
          <tbody>
            {filterData?.map((i, index) => (
              <tr key={index}>
                <td > #{index + 1} </td>
                <td >
                  {" "}
                  <img
                    src={
                      i.photo
                        ? i.photo
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWgg1mjdrrer5asSh0TiJKDkdg40UEHc3uw&usqp=CAU"
                    }
                    alt="User"
                    style={{width  : '100px'}}
                  />{" "}
                </td>

                <td>
                <Link to={`/customer/${i._id}`}>
                {i.tradeName}
                </Link>
              </td>
                <td> {i.phoneNumber} </td>
                <td> {i.address?.[0]?.homeaddress + i.address?.[0]?.city} </td>
                <td> {i.email} </td>
                <td> {i.tradeName} </td>
                <td> {i.role} </td>
                <td>
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => deleteHandler(i._id)}
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

export default HOC(Supllier);
