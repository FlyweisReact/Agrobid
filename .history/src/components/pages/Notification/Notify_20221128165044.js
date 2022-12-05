/** @format */

import React from "react";
import { Container, Form, Button, FloatingLabel } from "react-bootstrap";
import HOC from "../../layout/HOC";

const Notify = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Add Notification
          </span>
        </div>
      </section>

      <Container style={{ color: "black", marginTop: "2%", width: "800px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <FloatingLabel
            controlId="floatingTextarea"
            label="Comments"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>

          <Button variant="outline-primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default HOC(Notify);
