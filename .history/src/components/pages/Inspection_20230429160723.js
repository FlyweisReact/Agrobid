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
  const [id, setId] = useState("");
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/inspaction/all"
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
          `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/inspaction/add`,
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
    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.put(
          `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/inspaction/update/${id}`,
          { status }
        );
        console.log(data);
        toast.success("Edited");
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
            {edit ? "Edit Inspection Company" : " Add Inspection Company"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container style={{ color: "black" }}>
            {edit ? (
              <Form onSubmit={putHandler}>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </Form.Group>

                <Button type="submit">Submit</Button>
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
                    <option value="Type of Services">Type of Services</option>
                    <option value="Sample Draw Only"> Sample Draw Only</option>
                    <option value="Inspection Sites">Inspection Sites</option>
                    <option value="Sample Draw + Physical Inspection">
                      Sample Draw + Physical Inspection
                    </option>
                    <option value="  Sample Draw + Physical Inspection + Chemical Inspection">
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

                <Button type="submit">Submit</Button>
              </Form>
            )}
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/inspaction/delete/${id}`
      );
      console.log(data);
      toast.success("Deleted");
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };
  
  const filterData = !query
  ? data
  : data?.filter(
      (i) =>
        i?.name?.toLowerCase().includes(query?.toLowerCase()) ||
        i?.price
        ?.tos
          ?.toLowerCase()
          .includes(query?.toLowerCase())
    );


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


      <div style={{ marginTop: "2%" }}>
        <div style={{ color: "black" }}>
          Search:{" "}
          <input
            type={"search"}
            style={{
              border: "1px solid #bfbfbf",
              width: "250px",
              color: "black",
              padding: "5px",
            }}
            placeholder="Search by Name , Phone number.."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>


      <Table
        striped
        bordered
        hover
        style={{
          overflow: "scroll",
          width: "100%",
          marginTop : '2%'
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
          {filterData?.map((i, index) => (
            <tr key={index}>
              <td> {index + 1} </td>
              <td> {i.name} </td>
              <td> {i.service} </td>
              <td> ₹{i.price} </td>
              <td> {i.lotID} </td>
              <td> {i.status} </td>
              <td style={{ display: "flex", gap: "10px" }}>
                <AiFillDelete
                  color="red"
                  cursor={"pointer"}
                  onClick={() => deleteHandler(i._id)}
                />
                <AiFillEdit
                  color="blue"
                  cursor={"pointer"}
                  onClick={() => {
                    setId(i._id);
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
