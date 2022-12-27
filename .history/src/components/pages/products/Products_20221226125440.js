/** @format */

import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Bid = [
  {
    crop: "Apple",
    location: "Delhi",
    grade: "B",
    variety: "Good",
    quantity: "20 Ton",
    rate: 10000,
    totalBag: 45,
    eRate: 14000,
    status: "active",
  },
  {
    crop: "Apple",
    location: "Delhi",
    grade: "B",
    variety: "Good",
    quantity: "20 Ton",
    rate: 10000,
    totalBag: 45,
    eRate: 14000,
    status: "pending",
  },
];

const Products = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [edit, setEdit] = React.useState(false);

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
            {edit ? "Edit Bid" : "Add Bid"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {edit ? (
            <Form
              style={{
                color: "black",
                margin: "auto",
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Grade</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          ) : (
            <Form
              style={{
                color: "black",
                margin: "auto",
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Crop</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>location</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Grade</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Variety</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Rate</Form.Label>
                <Form.Control type="number" min={0} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Total Bags</Form.Label>
                <Form.Control type="number" min={0} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Expected Rate</Form.Label>
                <Form.Control type="number" min={0} required />
              </Form.Group>

              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          )}
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
            All Bids
          </span>
          {/* <Button
            variant="outline-success"
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            Create Bid
          </Button> */}
        </div>
      </section>

      <div
        style={{
          marginTop : '2%' ,
          padding : '10px' ,
          overflowX: "scroll",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      >
        <div style={{width  : '95%' , display : 'flex' , justifyContent : 'space-between' , marginLeft : '2%' , marginTop : '1%' , marginBottom : '2% '}}>
        <p style={{ color: "black" , fontSize: "1.5rem" }}>Seller Bid </p>
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
        />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Lot Id</th>
              <th>Product Name</th>
              <th>Grade</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Expected Price</th>
              <th>Date</th>
              <th>Seller Name</th>
              <th>Status</th>
              <th>Time Left</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>Tomato</td>
            <td>Good</td>
            <td>500</td>
            <td>Delhi</td>
            <td>₹50,000</td>
            <td>12/02/2022 </td>
            <td>Abhishek </td>
            <td>Pending </td>
            <td>5 hjours </td>
          </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Products);
