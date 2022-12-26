/** @format */

import React from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Button, Container, Form } from "react-bootstrap";

const user = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "Supplier",
    tradeName: "React Developer",
    phone: 9874563214,
    location: "Delhi",
    role: "Buyer",
    email: "React1@gmail.com",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "Supplier2",
    tradeName: "React Developer",
    phone: 9874563214,
    location: "Delhi",
    role: "Buyer",
    email: "React1@gmail.com",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "Supplier3",
    tradeName: "React Developer",
    phone: 9874563214,
    location: "Delhi",
    role: "Buyer",
    email: "React1@gmail.com",
  },
];

const Inspection = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Loading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container style={{ color: "black" }}>
            <Form>
              <Form.Group>
                <Form.Label>Crop</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <br />
              <select
                className="mySelect"
                style={{ border: "1px solid black" }}
              >
                <option>Physical / Chemical</option>
                <option>Physical</option>
                <option>Chemical</option>
              </select>
              <br />
              <br />

              <Button>Submit</Button>
            </Form>
          </Container>
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
            Inspection Company
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add
          </Button>
        </div>
      </section>

      <div
        style={{
          width: "100%",
          overflowX: "scroll",
        }}
      >
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
              <th>Comapny Name</th>
              <th>Type of Service</th>
              <th>Prices</th>
              <th>Asigned Lot ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Inspection 1 </td>
              <td> 
              <select>
                <option>Type of Services</option>
                <option>Sample Draw Only</option>
                <option>Inspection Sites</option>
              </select>
              </td>
              <td> Physical </td>
              <td>
                <AiFillDelete color="red" cursor={"pointer"} />
                <AiFillEdit color="blue" cursor={"pointer"} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Inspection);
