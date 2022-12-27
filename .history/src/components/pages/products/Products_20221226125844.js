/** @format */

import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";



const Products = () => {
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
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form >
          <select style={{border : '1px solid black' , padding : '5px'}}>
            <option>Change Status</option>
            <option>Pending</option>
            <option>Complete</option>
          </select>
          <Button variant="outline-success">Submit</Button>
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
            All Bids
          </span>
          {/* <Button
            variant="outline-success"
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            Create Bid
          </Button> */}
        </div>
      </section>

      <div
        style={{
          marginTop : '2%' ,
          padding : '10px' ,
          overflowX: "scroll",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      >
        <div style={{width  : '95%' , display : 'flex' , justifyContent : 'space-between' , marginLeft : '2%' , marginTop : '1%' , marginBottom : '2% '}}>
        <p style={{ color: "black" , fontSize: "1.5rem" }}>Seller Bid </p>
        <input
          type="search"
          style={{
            width: "300px",
            border: "1px solid black",
            color: "black",
            padding: "5px",
            height: "40px",
            fontSize: "18px",
          }}
        />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Lot Id</th>
              <th>Product Name</th>
              <th>Grade</th>
              <th>Quantity</th>
              <th>Location</th>
              <th>Expected Price</th>
              <th>Date</th>
              <th>Seller Name</th>
              <th>Status</th>
              <th>Time Left</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>Tomato</td>
            <td>Good</td>
            <td>500</td>
            <td>Delhi</td>
            <td>₹50,000</td>
            <td>12/02/2022 </td>
            <td>Abhishek </td>
            <td>Pending </td>
            <td>5 hours </td>
            <td style={{display : 'flex' , gap : '10px'}}>
            <AiFillDelete color="red" cursor={'pointer'} />
            <AiFillEdit color="blue" cursor={'pointer'} onClick={() => setModalShow(true)} />
             </td>
          </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Products);
