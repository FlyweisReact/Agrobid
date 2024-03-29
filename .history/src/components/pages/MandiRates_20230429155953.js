/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const MandiRates = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [query, setQuery] = useState("");

  // Fetch Data
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

  // Add/Edit Data
  function AddRatesModal(props) {
    const [product, setProduct] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [arrival, setArrival] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    // Add Data
    const postData = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/mandi/add",
          { product, location, date, arrival, minPrice, maxPrice }
        );
        console.log(data);
        fetchData();
        props.onHide();
        toast.success(`${data.data.product} Added`);
      } catch (e) {
        console.log(e);
      }
    };

    // Edit Data
    const EditHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.put(
          `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/mandi/update/${id}`,
          { product, location, date, arrival, minPrice, maxPrice }
        );
        console.log(data);
        fetchData();
        props.onHide();
        toast.success(`${data.data.product} Edit`);
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
            {edit ? "Edit Mandi Rate" : "Add Mandi Rate"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={edit ? EditHandler : postData}>
            <Form.Group className="mb-3">
              <Form.Label>Product</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setProduct(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Arrival</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setArrival(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Min. Price</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Max Price</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  // Delete Data
  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/mandi/delete/${id}`
      );
      console.log(data);
      fetchData();
      toast.success("Delted");
    } catch (e) {
      console.log(e);
    }
  };

  const filterData = !query
    ? data?.message
    : data?.message?.filter(
        (i) =>
          i?.product?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.location?.toLowerCase().includes(query?.toLowerCase())
      );

  return (
    <>
      <AddRatesModal show={show} onHide={() => setShow(false)} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "black", fontSize: "1.5rem" }}>
          Mandi Rates (Total : {dataCount}){" "}
        </p>
        <Button
          variant="outline-success"
          onClick={() => {
            setEdit(false);
            setShow(true);
          }}
        >
          Add New Rate
        </Button>
      </div>



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
            placeholder="Search by Product , Location.."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
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
            {filterData?.map((i, index) => (
              <tr key={index}>
                <td> #{index + 1} </td>
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
                      onClick={() => deleteHandler(i._id)}
                    ></i>
                    <i
                      class="fa-solid fa-edit"
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => {
                        setId(i._id);
                        setEdit(true);
                        setShow(true);
                      }}
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
