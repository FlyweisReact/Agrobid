/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import HOC from "../layout/HOC";

const MandiRates = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");

  const fetchData = async (e) => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/mandi/all"
      );
      setData(data);
      setDataCount(data.message.length);
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function AddRatesModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Mandi Rate
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Product</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Arrival</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Min. Price</Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Max Price</Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <AddRatesModal show={show} onHide={() => setShow(false)} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "black", fontSize: "1.5rem" }}>
          Mandi Rates (Total : {dataCount}){" "}
        </p>
        <Button variant="outline-success" onClick={() => setShow(true)}>
          Add New Rate
        </Button>
      </div>
      <div style={{ marginTop: "2%", overflow: "auto" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Location</th>
              <th>Date</th>
              <th>Arrival</th>
              <th>Min Price</th>
              <th>Max Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.message?.map((i, index) => (
              <tr key={index}>
                <td> {i.product} </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
            <tr>
              <td>Product1</td>
              <td>Delhi</td>
              <td>12/10/2022</td>
              <td>11/20/2022</td>
              <td>₹5,000</td>
              <td>₹10,000</td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete color="red" cursor={"pointer"} />
                  <AiFillEdit color="blue" cursor={"pointer"} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Product1</td>
              <td>Delhi</td>
              <td>12/10/2022</td>
              <td>11/20/2022</td>
              <td>₹5,000</td>
              <td>₹10,000</td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  <AiFillDelete color="red" cursor={"pointer"} />
                  <AiFillEdit color="blue" cursor={"pointer"} />
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(MandiRates);
