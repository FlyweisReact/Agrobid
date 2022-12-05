/** @format */

import React, { useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";

const vehicle = [
  {
    Vnumber: 124521,
    Clocation: "delhi",
    af: "Truck",
    capacity: "2MT",
    Route: [" Delhi ", "Mumbai ", "Cheenai"],
  },
  {
    Vnumber: 124521,
    Clocation: "delhi",
    af: "Truck",
    capacity: "2MT",
    Route: [" Delhi ", "Mumbai ", "Cheenai"],
  },
  {
    Vnumber: 124521,
    Clocation: "delhi",
    af: "Truck",
    capacity: "2MT",
    Route: [" Delhi ", "Mumbai ", "Cheenai"],
  },
];

const Service = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);

  // Edit/Add Modal
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
            {edit ? "Edit Vehicle" : "Add Vehicle"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container></Container>
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
            All Vehicles
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
          marginTop: "5%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>Vehicle Number</th>
            <th>Current Location</th>
            <th>Atach Fleet</th>
            <th>Capacity</th>
            <th>Vehicle Route </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicle.map((i, index) => (
            <tr key={index}>
              <td> {i.Vnumber}</td>
              <td>{i.Clocation} </td>
              <td> {i.af} </td>
              <td> {i.capacity} </td>
              <td style={{ paddingLeft: "10px" }}>
                {" "}
                {i.Route.map((g, index) => (
                  <p key={index}> {g} </p>
                ))}{" "}
              </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <AiOutlineEdit color="black" cursor="pointer"  />
                  <AiFillDelete
                    color="red"
                    cursor="pointer"
                    onClick={() =>
                      toast.success("vehicle Deleted Successfully")
                    }
                  />
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
