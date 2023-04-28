/** @format */

import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import axios from "axios";


const Products = () => {
  const { role } = useParams();
  const [modalShow, setModalShow] = React.useState(false);

  const [ data , setData ] = useState("")

  const fetchHandler = async () => {
    try{
      const { data}  = await axios.get(`https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/createbid/${role}`)
      setData(data.data)
    }catch(e) { 
      console.log(e)
    }
  }


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
                <tbody>
                  {data?.map(( i , index) => (
                    <tr key={index}>
                      <td> {index + 1} </td>
                    </tr>
                  ))}
                </tbody>
            </Table>
          </div>
        </>
   
   
  );
};

export default HOC(Products);