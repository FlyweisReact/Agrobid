/** @format */

import React, { useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import HOC from "../layout/HOC";

const Location = () => {
    const [show, setShow] = useState(false);

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
              Add Language
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Language</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
  
              <Button variant="outline-success" style={{ marginTop: "1%" }}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      );
    }
  
    return (
      <>
        <AddRatesModal show={show} onHide={() => setShow(false)} />
  
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "black", fontSize: "1.5rem" }}>Location</p>
          <Button variant="outline-success" onClick={() => setShow(true)}>
            Add
          </Button>
        </div>
        <div style={{ marginTop: "2%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Complete Address</th>
                <th>State</th>
                <th>District</th>
                <th>Pin Code</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>lorem ipsum lorem ipudm lorem ipsum</td>
                <td>Delhi</td>
                <td>Delhi</td>
                <td>11000</td>
                <td>
                  <AiFillDelete color="red" cursor={"pointer"} />
                </td>
              </tr>
              <tr>
                <td>Hindi</td>
                <td>
                  <AiFillDelete color="red" cursor={"pointer"} />
                </td>
              </tr>
              <tr>
                <td>Marathi</td>
                <td>
                  <AiFillDelete color="red" cursor={"pointer"} />
                </td>
              </tr>
              <tr>
                <td>Punjabi</td>
                <td>
                  <AiFillDelete color="red" cursor={"pointer"} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
  };

export default HOC(Location)