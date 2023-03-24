/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Inspection = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/inspaction/all"
      );
      setData(data.message);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [name, setName] = useState("");
    const [service, setService] = useState("");
    const [price, setPrice] = useState("");
    const [lotID, setLotID] = useState("");
    const [status, setStatus] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          `http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/inspaction/add`,
          { name, service, price, lotID, status }
        );
        console.log(data);
        toast.success("Added");
        fetchData();
        props.onHide();
      } catch (e) {
        console.log(e);
      }
    };

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
              <Form onSubmit={postHandler}>
                <Form.Group className="mb-3">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                <select
                  style={{ border: "1px solid black", padding: "5px" }}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value='Type of Services' >Type of Services</option>
                  <option value='Sample Draw Only' > Sample Draw Only</option>
                  <option value='Inspection Sites'>Inspection Sites</option>
                  <option value='Sample Draw + Physical Inspection'>Sample Draw + Physical Inspection</option>
                  <option value='  Sample Draw + Physical Inspection + Chemical Inspection'>
                    Sample Draw + Physical Inspection + Chemical Inspection
                  </option>
                </select>
        
                </Form.Group>
           
          
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    min={0}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Assign Lot Id</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setLotID(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </Form.Group>

                <Button type="submit">
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
            Inspection Company (Total : {data?.length})
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

      <Table
        striped
        bordered
        hover
        style={{
          overflow: "scroll",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>SNo.</th>
            <th>Comapny Name</th>
            <th>Type of Service</th>
            <th>Prices</th>
            <th>Asigned Lot ID</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((i, index) => (
            <tr>
              <td> {index + 1} </td>
              <td> {i.name} </td>
              <td> {i.service} </td>
              <td> ₹{i.price} </td>
              <td> {i.lotID} </td>
              <td> {i.status} </td>
              <td style={{ display: "flex", gap: "10px" }}>
                <AiFillDelete color="red" cursor={"pointer"} />
                <AiFillEdit
                  color="blue"
                  cursor={"pointer"}
                  onClick={() => {
                    setEdit(true);
                    setModalShow(true);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Inspection);
