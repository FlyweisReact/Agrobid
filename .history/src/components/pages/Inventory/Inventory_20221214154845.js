/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { Button, Form, Modal } from "react-bootstrap";

const crop = [
  {
    name: "Ginger",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJWHLnqXepNTfBbj7y0rXc3SICKvlZ-EgBOXSPv4rS6BgZ3akSoDHGGxgWSQNvhKsOlA&usqp=CAU'
  },
  {
    name: "Apple",
    image : 'https://plantic.in/image/blog/vegs.jpg'
  },
  {
    name: "carrot",
    image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxeKdOpI1QbQoAAC3Uh7vLnVZzQ9dDGrw_bQivaJKP0AI2VJhvg0ClfMqJ5ClOK9RdIIU&usqp=CAU'
  },

];

const Inventory = () => {
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
          <Modal.Title id="contained-modal-title-vcenter">Add Crop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Button variant="outline-success" type="submit">
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
            All Crops
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Add Crop
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
            <th> Image </th>
            <th> Name</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {crop.map((i, index) => (
            <tr key={index}>
              <td> </td>
              <td> {i.name} </td>
              <td>
                <AiFillDelete
                  color="red"
                  cursor="pointer"
                  onClick={() => toast.success("Crop Deleted Successfully")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Inventory);
