import React, { useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import HOC from "../layout/HOC";

const Language = () => {
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
             
             <Button 
            </Form>
          </Modal.Body>
        </Modal>
      );
    }
  
    return (
      <>
        <AddRatesModal show={show} onHide={() => setShow(false)} />
  
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "black", fontSize: "1.5rem" }}>Mandi Rates</p>
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

export default HOC(Language)