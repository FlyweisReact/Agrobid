/** @format */

import React, { useState } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";

const Inspection = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);

  const [ data, setData ] = useState([])

  const fetchData = async () => {
    try { 
      const { data } = await axios.get("http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/inspaction/all")
      setData(data.message)
    }catch(e) { 
      console.log(e)
    }
  }



  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Inspection Company
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container style={{ color: "black" }}>
            {edit ? (
              <Form>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Button style={{ marginTop: "1%", borderRadius: "0" }}>
                  Submit
                </Button>
              </Form>
            ) : (
              <Form>
                <Form.Group>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <br />
                <select style={{ border: "1px solid black", padding: "5px" }}>
                  <option>Type of Services</option>
                  <option>Sample Draw Only</option>
                  <option>Inspection Sites</option>
                  <option>Sample Draw + Physical Inspection</option>
                  <option>
                    Sample Draw + Physical Inspection + Chemical Inspection
                  </option>
                </select>
                <br />
                <br />
                <Form.Group>
                  <Form.Label>Price</Form.Label>
                  <Form.Control type="number" min={0} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Assign Lot Id</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Button style={{ marginTop: "1%", borderRadius: "0" }}>
                  Submit
                </Button>
              </Form>
            )}
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
          <Button
            variant="outline-success"
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            Add
          </Button>
        </div>
      </section>

      <div
        style={{
          overflow: "auto",
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Inspection 1 </td>
              <td>
                <select style={{ border: "1px solid black", padding: "5px" }}>
                  <option>Type of Services</option>
                  <option>Sample Draw Only</option>
                  <option>Inspection Sites</option>
                  <option>Sample Draw + Physical Inspection</option>
                  <option>
                    Sample Draw + Physical Inspection + Chemical Inspection
                  </option>
                </select>
              </td>
              <td> ₹5,000 </td>
              <td> 2 </td>
              <td> Complete </td>
              <td style={{ display: "flex", gap: "10px" }}>
                <AiFillDelete color="red" cursor={"pointer"} />
                <AiFillEdit color="blue" cursor={"pointer"}  onClick={() => {
              setEdit(true);
              setModalShow(true);
            }} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Inspection);
