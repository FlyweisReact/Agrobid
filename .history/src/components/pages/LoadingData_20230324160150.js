/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { AiFillEdit } from "react-icons/ai";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";

const LoadingData = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [ data , setData ] = useState([])

    const fetchData = async () => {
      try{
        const { data } = await axios.get("http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/loding/all")
        setData(data.data)
      }catch(e) {
        console.log(e)
      }
    }

    useEffect(() => {
      fetchData()
    },[])
  
    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Loading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container style={{ color: "black" }}>
              <Form>

                <Form.Group>
                    <Form.Label>Expected Delivery</Form.Label>
                    <Form.Control type='date' />
                </Form.Group>
                <br />
              
                <Button>Submit</Button>
              </Form>
            </Container>
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
              All Loading's (Total : {data?.length})
            </span>
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
                <th>Sno.</th>
                <th>User</th>
                <th> Supllier </th>
                <th>Crop</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Delivery Expected</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {i.user?.name} </td>
                  <td> {i.supplier?.name} </td>
                  <td > {i.crop} </td>
                  <td > {i.quantity} </td>
                  <td > ₹{i.amount} </td>
                  <td> {i.deliveryDate} </td>
                  <td>
                    <AiFillEdit
                      color="blue"
                      cursor={"pointer"}
                      onClick={() => {
                        setModalShow(true);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  };

export default HOC(LoadingData)