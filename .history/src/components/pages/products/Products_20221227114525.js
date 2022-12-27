/** @format */

import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

const data = [
  {
    LotId: "1",
    Name: "Abishek",
    Product: "Tomato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    Ep: "5,000",
    phone: "4512789632",
    Date: "12/02/2200",
    Status: "Pending",
    TimeLeft: "2hour's",
  },
  {
    LotId: "2",
    Name: "Ramesh",
    Product: "Tomato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    Ep: "5,000",
    phone: "1245789621",
    Date: "12/02/2200",
    Status: "Pending",
    TimeLeft: "2hour's",
  },
];

const data2 = [
  {
    LotId: "2",
    Buyer: "Ramesh",
    phone: "1234567890",
    Product: "Potato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    BPrice: "5,000",
    Date: "12/02/2022",
    status: "Pending",
    timeLeft: "5 hour's",
  },
  {
    LotId: "3",
    Buyer: "Sam",
    phone: "1234567890",
    Product: "Potato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    BPrice: "5,000",
    Date: "12/02/2022",
    status: "Pending",
    timeLeft: "5 hour's",
  },
];

const Products = () => {
  const { role } = useParams();
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Serach Bar
  const [query, setQuery] = useState("");

  const handlerChange = (e) => {
    setQuery(e.target.value);
  };

  const filter = data.filter(
    (i) =>
      i?.LotId?.toLowerCase().includes(query?.toLowerCase()) ||
      i?.phone?.toLowerCase().includes(query?.toLowerCase()) ||
      i?.Name?.toLowerCase().includes(query?.toLowerCase())
  );

  // Search bar 2
  const [search, setSearch] = useState("");

  const seachBar = (e) => {
    setSearch(e.target.value);
  };

  const SearchData = data2.filter(
    (i) =>
      i?.LotId?.toLowerCase().includes(search?.toLowerCase()) ||
      i?.Buyer?.toLowerCase().includes(search?.toLowerCase()) ||
      i?.phone?.toLowerCase().includes(search?.toLowerCase())
  );

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <select style={{ border: "1px solid black", padding: "5px" }}>
              <option>Change Status</option>
              <option>Pending</option>
              <option>Complete</option>
            </select>
            <br />
            <Button
              variant="outline-success"
              style={{ marginTop: "1%", borderRadius: "0" }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            {role} Bids
          </span>
        </div>
      </section>

      {role === "Supplier" ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "black", fontSize: "1.5rem" }}>{role} Bid </p>
            <div>
              <input
                type="search"
                style={{
                  width: "300px",
                  border: "1px solid black",
                  color: "black",
                  padding: "5px",
                  height: "40px",
                  fontSize: "18px",
                  marignLeft: "",
                }}
                placeholder="Search by Lot Id , Name , Phone Number...."
                onChange={handlerChange}
              />
              <i
                class="fa-solid fa-filter"
                style={{
                  color: "blue",
                  marginTop: "5px",
                  marginLeft: "10px",
                  fontSize: "2rem",
                }}
              ></i>
            </div>
          </div>
          <div
            style={{
              marginTop: "2%",
              overflow: "auto",
            }}
          >
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Lot Id</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>Product</th>
                  <th>Grade</th>
                  <th>Quantity</th>
                  <th>Location</th>
                  <th>Expected Price</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Time Left</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filter?.map((i, index) => (
                  <tr key={index}>
                    <td> {i.LotId} </td>
                    <td> {i.Name} </td>
                    <td> {i.phone} </td>
                    <td> {i.Product} </td>
                    <td> {i.Grade} </td>
                    <td> {i.Quantity} </td>
                    <td> {i.Location} </td>
                    <td> {i.Ep} </td>
                    <td> {i.Date} </td>
                    <td> {i.Status} </td>
                    <td> {i.TimeLeft} </td>
                    <td style={{ display: "flex", gap: "10px" }}>
                      <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                      <i
                        class="fa-solid fa-pen-to-square"
                        style={{ color: "blue" }}
                        onClick={() => setModalShow(true)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div>
              <p>All</p>
              <p>Pending</p>
              <p>Live</p>
              <p>Aggroved</p>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      {role === "Buyer" ? (
        <div
          style={{
            marginTop: "2%",
            overflow: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "black", fontSize: "1.5rem" }}>{role} Bid </p>
            <input
              type="search"
              style={{
                width: "300px",
                border: "1px solid black",
                color: "black",
                padding: "5px",
                height: "40px",
                fontSize: "18px",
              }}
              placeholder="Search by Lot Id , Name , Phone Number...."
              onChange={seachBar}
            />
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Lot Id</th>
                <th>Buyer Name</th>
                <th>Phone Number</th>
                <th>Product Name</th>
                <th>Grade</th>
                <th>Quantity</th>
                <th>Location</th>
                <th>Bid Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Time Left</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {SearchData?.map((i, index) => (
                <tr key={index}>
                  <td> {i.LotId} </td>
                  <td> {i.Buyer} </td>
                  <td> {i.phone} </td>
                  <td> {i.Product} </td>
                  <td> {i.Grade} </td>
                  <td> {i.Quantity} </td>
                  <td> {i.Location} </td>
                  <td> {i.BPrice} </td>
                  <td> {i.Date} </td>
                  <td> {i.status} </td>
                  <td> {i.timeLeft} </td>
                  <td style={{ display: "flex", gap: "10px" }}>
                    <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                    <i
                      class="fa-solid fa-pen-to-square"
                      style={{ color: "blue" }}
                      onClick={() => setModalShow(true)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HOC(Products);
