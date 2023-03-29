/** @format */

import React from "react";
import { Container, Form, Button, FloatingLabel , Modal } from "react-bootstrap";
import HOC from "../../layout/HOC";

const Notify = () => {

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
          Add Notificatin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <FloatingLabel
            controlId="floatingTextarea"
            label="Notice"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>

          <Button variant="outline-primary" type="submit">
            Submit
          </Button>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
  


  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Add Notification
          </span>
        </div>
      </section>

    </>
  );
};

export default HOC(Notify);
