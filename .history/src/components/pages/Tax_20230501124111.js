/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import { Modal, Form, Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
const Tax = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);



  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/tax"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <div className="pb-4 w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Tax
          </span>
        </div>
      </section>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tax</th>
            <th>Commission</th>
            <th>Other Expenses</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.result?.map((i, index) => (
            <tr key={index}>
              <td> {i.tax}% </td>
              <td> {i.others_charges}%</td>
              <td>{i.others}% </td>
              <td>
                <AiFillEdit
                  color="blue"
                  onClick={() => setModalShow(true)}
                  cursor="pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Tax);
