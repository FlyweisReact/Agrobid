/** @format */

import React from "react";
import { Container, Form, Button, FloatingLabel, Modal } from "react-bootstrap";
import HOC from "../../layout/HOC";

const Notify = () => {
  const [modalShow, setModalShow] = React.useState(false);

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
            Add Notification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Notification"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
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
          style={{
            marginTop: "2%",
          }}
        >
          <thead>
            <tr>
              <th>SNo.</th>
              <th>User Name</th>
              <th>Phone Number</th>
              <th>Image</th>
              <th>Comment</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {i.userId?.name} </td>
                <td> {i.userId?.phoneNumber} </td>
                <td>
                  {" "}
                  <img
                    src={i.userId?.photo}
                    alt=""
                    style={{ width: "100px" }}
                  />{" "}
                </td>
                <td> {i.comment} </td>
                <td> {i.rating} </td>
                <td>
                <i className="fa-solid fa-trash" style={{color : 'red' , cursor : 'pointer'}}
                onClick={() => deleteHandler(i._id)}
                 ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </>
  );
};

export default HOC(Notify);