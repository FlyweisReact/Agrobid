/** @format */

import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

const data = [
  {
    LotId: "3fXdW",
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
    LotId: "fLKHu",
    Name: "Ramesh",
    Product: "Tomato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    Ep: "5,000",
    phone: "1245789621",
    Date: "12/02/2200",
    Status: "Live",
    TimeLeft: "2hour's",
  },
  {
    LotId: "fLKHu",
    Name: "Sona",
    Product: "Tomato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    Ep: "5,000",
    phone: "1245789621",
    Date: "12/02/2200",
    Status: "Approved",
    TimeLeft: "2hour's",
  },
  {
    LotId: "YfMfI",
    Name: "Sudheer",
    Product: "Tomato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    Ep: "5,000",
    phone: "1245789621",
    Date: "12/02/2200",
    Status: "Expired",
    TimeLeft: "2hour's",
  },
  {
    LotId: "YzRp5",
    Name: "Rajni",
    Product: "Tomato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    Ep: "5,000",
    phone: "1245789621",
    Date: "12/02/2200",
    Status: "Positive",
    TimeLeft: "2hour's",
  },
  {
    LotId: "VuvqA",
    Name: "Krishna",
    Product: "Tomato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    Ep: "5,000",
    phone: "1245789621",
    Date: "12/02/2200",
    Status: "Loading Awaited",
    TimeLeft: "2hour's",
  },
  {
    LotId: "7nZE4",
    Name: "Anand",
    Product: "Tomato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    Ep: "5,000",
    phone: "1245789621",
    Date: "12/02/2200",
    Status: "In Transit",
    TimeLeft: "2hour's",
  },
  {
    LotId: "gbwPl",
    Name: "Ajit",
    Product: "Tomato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    Ep: "5,000",
    phone: "1245789621",
    Date: "12/02/2200",
    Status: "Delivered",
    TimeLeft: "2hour's",
  },
  {
    LotId: "Cazer",
    Name: "Uttara",
    Product: "Tomato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    Ep: "5,000",
    phone: "1245789621",
    Date: "12/02/2200",
    Status: "Delivered",
    TimeLeft: "2hour's",
  },
];

const data2 = [
  {
    LotId: "3fXdW",
    Buyer: "Ramesh",
    phone: "1234567890",
    Product: "Potato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    BPrice: "5,000",
    Date: "12/02/2022",
    status: "Successfully placed bid",
    timeLeft: "5 hour's",
  },
  {
    LotId: "fLKHu",
    Buyer: "Sam",
    phone: "1234567890",
    Product: "Potato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    BPrice: "5,000",
    Date: "12/02/2022",
    status: "Active",
    timeLeft: "5 hour's",
  },
  {
    LotId: "YfMfI",
    Buyer: "Jayant",
    phone: "1234567890",
    Product: "Potato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    BPrice: "5,000",
    Date: "12/02/2022",
    status: "Waitlisted",
    timeLeft: "5 hour's",
  },
  {
    LotId: "YzRp5",
    Buyer: "Rachna",
    phone: "1234567890",
    Product: "Potato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    BPrice: "5,000",
    Date: "12/02/2022",
    status: "Won",
    timeLeft: "5 hour's",
  },
  {
    LotId: "VuvqA",
    Buyer: "Punita",
    phone: "1234567890",
    Product: "Potato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    BPrice: "5,000",
    Date: "12/02/2022",
    status: "Requested Value Addition",
    timeLeft: "5 hour's",
  },
  {
    LotId: "7nZE4",
    Buyer: "Minakshi",
    phone: "1234567890",
    Product: "Potato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    BPrice: "5,000",
    Date: "12/02/2022",
    status: "Requested Inspections",
    timeLeft: "5 hour's",
  },
  {
    LotId: "gbwPl",
    Buyer: "Vihaan",
    phone: "1234567890",
    Product: "Potato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    BPrice: "5,000",
    Date: "12/02/2022",
    status: "In Transit",
    timeLeft: "5 hour's",
  },
  {
    LotId: "Cazer",
    Buyer: "Parminder",
    phone: "1234567890",
    Product: "Potato",
    Grade: "Good",
    Quantity: "500",
    Location: "Delhi",
    BPrice: "5,000",
    Date: "12/02/2022",
    status: "Delivered",
    timeLeft: "5 hour's",
  },
];

const Products = () => {
  const { role } = useParams();
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

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
          Bids
          </span>
        </div>
      </section>

  
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
              
            </Table>
          </div>
        </>
   
    </>
  );
};

export default HOC(Products);
