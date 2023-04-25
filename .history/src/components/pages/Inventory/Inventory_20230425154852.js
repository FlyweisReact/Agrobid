/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Form, Modal } from "react-bootstrap";

const Inventory = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/items"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  function AddCrop(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Crop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Grade</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Variety</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Crops
          </span>
        </div>
      </section>

      <div style={{ overflow: "auto" }}>
        <Table
          striped
          bordered
          hover
          style={{
            marginTop: "2%",
          }}
        >
          <thead>
            <tr>
              <th>SNo. </th>
              <th> Crop Image </th>
              <th> Crop Name </th>
              <th> Variety </th>
              <th> Grade </th>
              <th> Moisture </th>
              <th> Extraneous Matter </th>
              <th>Foreign Matter</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.result?.map((i, index) => (
              <tr>
                <td>#{index + 1} </td>
                <td>
                  <img src={i.image} alt="" style={{ width: "100px" }} />
                </td>
                <td> {i.name} </td>
                <td> {i.variaty} </td>
                <td> {i.grade} </td>
                <td> {i.moisture} </td>
                <td> {i.extraneous} </td>
                <td> {i.foreign} </td>
                <td>
                  <i
                    class="fa-solid fa-delete-left"
                    style={{ color: "red" }}
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

export default HOC(Inventory);
