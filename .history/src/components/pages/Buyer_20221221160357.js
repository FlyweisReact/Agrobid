/** @format */

import React from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";

const user = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "Buyer",
    tradeName: "React Developer",
    phone: 9874563214,
    location: "Delhi",
    role: "Buyer",
    email: "React1@gmail.com",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "Buyer2",
    tradeName: "React Developer",
    phone: 9874563214,
    location: "Delhi",
    role: "Buyer",
    email: "React1@gmail.com",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    name: "Buyer3",
    tradeName: "React Developer",
    phone: 9874563214,
    location: "Delhi",
    role: "Buyer",
    email: "React1@gmail.com",
  },
];

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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group>
          <Form.Label>OTP</Form.Label>
          <Form.Group type='tel' pattern='[0-9]{6}'  />
        </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}


const Buyer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Buyer's
          </span>
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
            <th>Image</th>
            <th> Name </th>
            <th>trade Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Location</th>
            <th>Role</th>
            <th>Send OTP</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((i, index) => (
            <tr key={index}>
              <td>
                <img src={i.image} alt="" className="fast-food" />
              </td>
              <td> {i.name} </td>
              <td> {i.tradeName} </td>
              <td> {i.email} </td>
              <td> {i.phone} </td>
              <td> {i.location} </td>
              <td> {i.role} </td>
              <td>
                <Button>onClick={() => setModalShow(true)}</Button>
              </td>

              <td>
                <AiFillDelete
                  color="red"
                  cursor="pointer"
                  onClick={() => {
                    toast.success("User Deleted Successfully");
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Buyer);
