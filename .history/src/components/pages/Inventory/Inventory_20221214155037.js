/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { Button, Form, Modal } from "react-bootstrap";

const crop = [
  {
    name: "Cariander",
    image:
      "https://cdn.britannica.com/95/205795-050-EF644B7F/Bowl-cilantro-leaves-coriander-fruits-Coriandrum-sativum.jpg",
  },
  {
    name: "Ginger",
    image:
      "https://www.thespruceeats.com/thmb/IZkMke9WX9e7KnRf4DjvNKAt7Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-ginger-1807768-hero-02-c589bfc0fe5044d29cb930e74d1b6db9.jpg",
  },
  {
    name: "carrot",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxeKdOpI1QbQoAAC3Uh7vLnVZzQ9dDGrw_bQivaJKP0AI2VJhvg0ClfMqJ5ClOK9RdIIU&usqp=CAU",
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
              <td>
                <img src={i.image} alt="" className="fast-food" />
              </td>
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
