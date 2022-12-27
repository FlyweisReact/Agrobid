/** @format */

import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";

const Products = () => {
  const {role} = useParams()
  const [modalShow, setModalShow] = React.useState(false);

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
            {role} Bids
          </span>
        </div>
      </section>

      {role === 'Supplier' ? :''}

    </>
  );
};

export default HOC(Products);
