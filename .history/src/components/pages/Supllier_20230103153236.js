/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { AiFillEdit } from "react-icons/ai";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";

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
const Supllier = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const [data , setData] = useState([])

  const fetchData = async () => {
    try{
      const {data} = await axios.get('http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/createbid/all')
      console.log(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Send OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container style={{ color: "black" }}>
            <Form>
              {edit ? (
                <>
                  <Form.Group>
                    <Form.Label>OTP</Form.Label>
                    <Form.Control
                      type="tel"
                      pattern="[0-9]{6}"
                      placeholder="124563"
                    />
                  </Form.Group>
                </>
              ) : (
                <>
                  <select
                    className="mySelect"
                    style={{ border: "1px solid black" }}
                  >
                    <option>Select</option>
                    <option>Success</option>
                    <option>Decline</option>
                    <option>processing</option>
                  </select>
                  <br />
                </>
              )}
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
            All Supplier's
          </span>
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
              <th>Image</th>
              <th> Name </th>
              <th>trade Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Crop</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Send OTP</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((i, index) => (
              <tr key={index}>
                <td>
                  <img src={i.image} alt="" className="fast-food" />
                </td>
                <td> {i.name} </td>
                <td> {i.tradeName} </td>
                <td> {i.email} </td>
                <td> {i.phone} </td>
                <td> {i.location} </td>
                <td>Cariander</td>
                <td>5 Ton </td>
                <td>₹5000</td>
                <td>Ongoing</td>
                <td>
                  <Button
                    style={{ borderRadius: "0", textAlign: "center" }}
                    onClick={() => {
                      setEdit(true);
                      setModalShow(true);
                    }}
                  >
                    Send
                  </Button>
                </td>
                <td>
                  <AiFillEdit
                    color="blue"
                    cursor={"pointer"}
                    onClick={() => {
                      setEdit(false);
                      setModalShow(true);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Supllier);
