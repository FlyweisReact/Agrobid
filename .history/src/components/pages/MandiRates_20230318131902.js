/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import HOC from "../layout/HOC";

const MandiRates = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");

  const fetchData = async (e) => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/mandi/all"
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
    const [product, setProduct] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [arrival, setArrival] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const postData = async (e) => {
      try {
        const { data } = await axios.post(
          "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/mandi/add",
          { product, location, date, arrival, minPrice, maxPrice }
        );

        
      } catch (e) {
        console.log(e);
      }
    };

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
              <th>SNo.</th>
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
                <td> {index} </td>
                <td> {i.product} </td>
                <td> {i.location} </td>
                <td> {i.Date} </td>
                <td> {i.arrival} </td>
                <td> {i.minPrice} </td>
                <td> {i.maxPrice} </td>
                <td>
                  <div className="d-flex gap-2">
                    <i
                      class="fa-solid fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
                    ></i>
                    <i
                      class="fa-solid fa-edit"
                      style={{ color: "blue", cursor: "pointer" }}
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(MandiRates);
