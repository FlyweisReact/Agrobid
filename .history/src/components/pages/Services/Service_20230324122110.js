/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import axios from "axios";



const Service = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [edit, setEdit] = useState(false);
  const [ data , setData ] = useState([])

  // Get Vehicle 
  const  fetchData  = async () => {
    try{
      const { data } = await axios.get("http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/transport")
      setData(data.data)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  // Edit/Add Modal
  function MyVerticallyCenteredModal(props) {
    const [ transporterId , setTID ] = useState("")
    const [  vehicleNumber , setVN ] = useState("")
    const [ currentLocation , setCL ] = useState("")
    const [ attachFleet , setAF ] = useState("")
    const [ capacity , setC ] = useState("")
    const [ vehicleRoutes , setVR] = useState("")

    const postData = async () => {
        try{
          const { data } = await axios.post(`http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/transport/${setT}`)
        }catch(e) { 
          console.log(e)
        }
    }


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {edit ? "Edit Vehicle" : "Add Vehicle"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Vehicle Number</Form.Label>
                <Form.Control type="number" min={1} />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Current Location</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Attach Fleet</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Capacity </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Vehicle Route </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
      
              <Button variant="outline-success" >
                Submit
              </Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }


  const deleteHandler = async (id) => {
    try{
      const { data } = await axios.delete(`http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/transport/${id}`)
      toast.success(data.msg)
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
            All Vehicles ( Total : {data?.length})
          </span>

          <Button
            variant="success"
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            Add Vehicles
          </Button>
        </div>
      </section>

      <Table
        striped
        bordered
        hover
        style={{
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>SNo.</th>
            <th>Vehicle Number</th>
            <th>Current Location</th>
            <th>Attach Fleet</th>
            <th>Capacity</th>
            <th>Vehicle Route </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((i, index) => (
            <tr key={index}>
              <td> {index + 1}</td>
              <td> {i.vehicleNumber}</td>
              <td>{i.currentLocation} </td>
              <td> {i.attachFleet} </td>
              <td> {i.capacity} </td>
              <td style={{ paddingLeft: "10px" }}>
                {" "}
                {i.vehicleRoutes?.map((g, index) => (
                  <span key={index}> {g}, </span>
                ))}{" "}
              </td>
              <td>
                <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <AiOutlineEdit
                    color="black"
                    cursor="pointer"
                    onClick={() => {
                      setEdit(true);
                      setModalShow(true);
                    }}
                  />
                  <i className="fa-solid fa-trash" style={{color : 'red' , cursor : 'pointer'}} onClick={() => deleteHandler(i._id)} ></i>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Service);
