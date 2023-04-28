/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { Modal, Form, Button, FloatingLabel } from "react-bootstrap";
import axios from "axios";

const Terms = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/terms"
      );
      setData(data.data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  function MyVerticallyCenteredModal(props) {

    const  [ ]


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Terms&Condtion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <FloatingLabel controlId="floatingTextarea" label="Terms&Condition">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Terms&Condition
          </span>
        </div>
      </section>

      <Table striped bordered hover style={{ marginTop: "2%" }}>
        <thead>
          <tr>
            <th>Terms&Condition</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {data?.terms} </td>
            <td>
              <i
                class="fa-solid fa-pen-to-square"
                style={{ color: "#0a64ff", cursor: "pointer" }}
                onClick={() => setModalShow(true)}
              ></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Terms);