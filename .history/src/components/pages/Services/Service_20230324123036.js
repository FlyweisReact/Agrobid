/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const Service = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);

  // Get Vehicle
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/transport"
      );
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Edit/Add Modal
  function MyVerticallyCenteredModal(props) {
    const [transporterData, setTransporterData] = useState([]);
    const [transporterId, setTID] = useState("");
    const [vehicleNumber, setVN] = useState("");
    const [currentLocation, setCL] = useState("");
    const [attachFleet, setAF] = useState("");
    const [capacity, setC] = useState("");
    const [vehicleRoutes, setVR] = useState("");

    const postData = async () => {
      try {
        const { data } = await axios.post(
          `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/transport/${transporterId}`,
          {
            vehicleNumber,
            currentLocation,
            attachFleet,
            capacity,
            vehicleRoutes,
          }
        );
        console.log(data);
        fetchData();
        toast.success("Vehicle Added");
        props.onHide();
      } catch (e) {
        console.log(e);
      }
    };

    const fetchTransporter = async () => {
      try {
        const { data } = await axios.get(
          "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/admin/transpoter"
        );
        setTransporterData(data.message);
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      if (props.show === true) {
        fetchTransporter();
      }
    }, [props.show]);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {edit ? "Edit Vehicle" : "Add Vehicle"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={edit ? "" : postData}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Vehicle Number</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  onChange={(e) => setVN(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Current Location</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setCL(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Attach Fleet</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setAF(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  {transporterData?.map((i, index) => (
                    <option key={index}> {i.name} </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Capacity </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setC(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Vehicle Route </Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setVR(e.target.value)}
                />
              </Form.Group>

              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/transport/${id}`
      );
      toast.success(data.msg);
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Vehicles ( Total : {data?.length})
          </span>

          <Button
            variant="success"
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            Add Vehicles
          </Button>
        </div>
      </section>

      <Table
        striped
        bordered
        hover
        style={{
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>SNo.</th>
            <th>Vehicle Number</th>
            <th>Current Location</th>
            <th>Attach Fleet</th>
            <th>Capacity</th>
            <th>Vehicle Route </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((i, index) => (
            <tr key={index}>
              <td> {index + 1}</td>
              <td> {i.vehicleNumber}</td>
              <td>{i.currentLocation} </td>
              <td> {i.attachFleet} </td>
              <td> {i.capacity} </td>
              <td style={{ paddingLeft: "10px" }}>
                {" "}
                {i.vehicleRoutes?.map((g, index) => (
                  <span key={index}> {g}, </span>
                ))}{" "}
              </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <AiOutlineEdit
                    color="black"
                    cursor="pointer"
                    onClick={() => {
                      setEdit(true);
                      setModalShow(true);
                    }}
                  />
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => deleteHandler(i._id)}
                  ></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Service);
