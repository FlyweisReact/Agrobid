/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, FloatingLabel, Modal, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";

const Notify = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/notify"
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
    const [message, setMessage] = useState("");

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/notify",
          { message }
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
            Add Notification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Notification"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                onChange={(e) => setMessage(e.target.value)}
              />
            </FloatingLabel>

            <Button variant="outline-primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try { 
      const { data } = await axios.delete(`https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/notify/${id}`)
      console.log(data)
      toast.success("Deleted")
      fetchData()
    }catch(e) { 
      console.log(e)
    }
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
            Add Notification
          </span>
          <Button onClick={() => setModalShow(true)} variant="outline-success">
            Add Notification
          </Button>
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
      
        >
          <thead>
            <tr>
              <th>SNo.</th>
              <th>Notification</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {i.message} </td>
                <td>
                  {" "}
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => deleteHandler(i._id)}
                  ></i>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Notify);
