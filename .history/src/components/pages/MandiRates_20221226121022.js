/** @format */

import React, { useState } from "react";
import { Button, Table , Modal , Form } from "react-bootstrap";
import HOC from "../layout/HOC";

const MandiRates = () => {

  const [ show , setShow ] = useState(false)

  function AddRatesModal (props) {
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
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control type='date' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Arrival</Form.Label>
                <Form.Control type='date' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Min. Price</Form.Label>
                <Form.Control type='number' min={0} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Max Price</Form.Label>
                <Form.Control type='number' min={0} />
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );

  }


  return (
    <>
      <div style={{display : 'flex' , justifyContent : 'space-between'}}>
        <p style={{ color: "black", fontSize: "1.5rem" }}>Mandi Rates</p>
        <Button variant="outline-success">Add New Rate</Button>
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
            </tr>
            <tr>
              <td>Product1</td>
              <td>Delhi</td>
              <td>12/10/2022</td>
              <td>11/20/2022</td>
              <td>₹5,000</td>
              <td>₹10,000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(MandiRates);
