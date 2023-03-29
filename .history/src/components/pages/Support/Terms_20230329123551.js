/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { Modal, Form, Button, FloatingLabel } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Terms = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/terms"
      );
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [terms, setTerms] = useState("");

    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/terms",
          { terms }
        );
        toast.success(data.msg);
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
            Addd Terms&Condtion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={putHandler}>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Terms&Condition"
              >
                <Form.Control
                  as="textarea"
                  onChange={(e) => setTerms(e.target.value)}
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/terms/${id}`
      );
      console.log(data)
      toast.
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
            Terms&Condition
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Terms&Condition
          </Button>
        </div>
      </section>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Terms&Condition</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((i, index) => (
            <tr key={index}>
              <td> {i.terms} </td>
              <td>
                <i
                  class="fa-solid fa-trash"
                  style={{ color: "red", cursor: "pointer" }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Terms);
