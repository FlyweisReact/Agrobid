/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";

const Terms = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/terms"
      );
      setData(data.data[0]);
    } catch (e) {
      console.log(e);
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
            Terms&Condition
          </span>
        </div>
      </section>

      <Table striped bordered hover style={{ marginTop: "2%" }}>
        <thead>
          <tr>
            <th>Terms&Condition</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {data?.terms} </td>
            <td>
              <i
                class="fa-solid fa-pen-to-square"
                style={{
                  color:
                    '<i class="fa-solid fa-pen-to-square" style="color: #0a64ff;"></i>',
                  cursor: "pointer",
                }}
              ></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Terms);
