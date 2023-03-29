/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { AiFillEdit } from "react-icons/ai";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";

const LoadingData = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/loding/all"
      );
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Loading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container style={{ color: "black" }}>
            <Form>
              <Form.Group>
                <Form.Label>Expected Delivery</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
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
            All Loading's
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
              <th>User</th>
              <th> Supllier </th>
              <th>Crop</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Delivery Expected</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> User </td>
                <td> User </td>
                <td> Supplier </td>
                <td> Carrot </td>
                <td> 5 Ton </td>
                <td> ₹5000 </td>
                <td> 12/02/2002 </td>
                <td>
                  <AiFillEdit
                    color="blue"
                    cursor={"pointer"}
                    onClick={() => {
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

export default HOC(LoadingData);
