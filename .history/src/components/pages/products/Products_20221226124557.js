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

      <div style={{ overflowX: "scroll" }}>
      <h2>Seller Bid</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Crop</th>
              <th>location</th>
              <th>Grade</th>
              <th>Variety</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Total Bags</th>
              <th>Expected Rate</th>
              <th>Approve / Disapprove</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Bid.map((i, index) => (
              <tr key={index}>
                <td>{i.crop}</td>
                <td>{i.location}</td>
                <td>{i.grade}</td>
                <td>{i.variety}</td>
                <td>{i.quantity}</td>
                <td>{i.rate}</td>
                <td>{i.totalBag}</td>
                <td>{i.eRate}</td>
                <td>
                  <select className="mySelect">
                    <option>Select</option>
                    <option>Approve</option>
                    <option>DisApprove</option>
                  </select>
                </td>
                <td>{i.status}</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <AiFillEdit
                    color="blue"
                    cursor={"pointer"}
                    onClick={() => {
                      setEdit(true);
                      setModalShow(true);
                    }}
                  />
                  <AiFillDelete color="red" cursor={"pointer"} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Products);
