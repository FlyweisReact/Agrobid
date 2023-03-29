/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const Location = () => {
    const [show, setShow] = useState(false);
    const [ data , setData ] = useState([])

    const fetchHandler = async () => {
      try{
        const { data } = await axios.get("https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/location/")
        setData(data.result)
      }catch(e){
        console.log(e)
      }
    }

    useEffect(() => {
      fetchHandler()
    }, [  ])

    function AddRatesModal(props) {

      const [ address , setA ] = useState("")
      const [ state , setS ] = useState("")
      const [ distract , setD ] = useState("")
      const [ code , setC ] = useState("")

      const postHandler = async (e) => {
        e.preventDefault()
        try{
          const { data } = await axios.get("https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/location/" ,{
            address , 
            state , 
            distract , 
            code
          })
          console.log(data)
          toast.success("Added")
        }catch(e){
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
              Add Language
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={postHandler}>
              <Form.Group>
                <Form.Label>Complete Address</Form.Label>
                <Form.Control type="text" onChange={(e) => setA(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control type="text" onChange={(e) => setS(e.target.value)}  />
              </Form.Group>
              <Form.Group>
                <Form.Label>District</Form.Label>
                <Form.Control type="text" onChange={(e) => st(e.target.value)}  />
              </Form.Group>
              <Form.Group>
                <Form.Label>Pin Code</Form.Label>
                <Form.Control type="text" onChange={(e) => setA(e.target.value)}  />
              </Form.Group>
              <Button variant="outline-success" style={{ marginTop: "1%" }}>
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      );
    }
  
    return (
      <>
        <AddRatesModal show={show} onHide={() => setShow(false)} />
  
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "black", fontSize: "1.5rem" }}>Location</p>
          <Button variant="outline-success" onClick={() => setShow(true)}>
            Add
          </Button>
        </div>
        <div style={{ marginTop: "2%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
              <th>SNo.</th>
                <th>Complete Address</th>
                <th>State</th>
                <th>District</th>
                <th>Pin Code</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {data?.map((i , index) => (
              <tr key={index}>
              <td> {index + 1} </td>
                <td> {i.address} </td>
                <td> {i.state} </td>
                <td> {i.distract} </td>
                <td> {i.code} </td>
                <td>
                  <AiFillDelete color="red" cursor={"pointer"} />
                </td>
              </tr>
            ))}
          
            
            </tbody>
          </Table>
        </div>
      </>
    );
  };

export default HOC(Location)