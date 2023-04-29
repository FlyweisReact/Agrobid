/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const Language = () => {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const [ data , setData ] = useState([])

  const fetchHandler = async () => {
    try { 
      const {data } = await axios.get("https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/language/")
      setData(data.message)
    }catch(e)  { 
      console.log(e)
    }
  }

  useEffect(() => {
      fetchHandler()
  },[])

  function AddRatesModal(props) {
    const [ language , setLanguage] = useState('')

    const postHandler = async (e) => {
      e.preventDefault()
      try{
        const { data } = await axios.post("https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/language/" , {language})
        console.log(data)
        toast.success("Added")
        fetchHandler()
        props.onHide()
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
            Add Language
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className='mb-3'>
              <Form.Label>Language</Form.Label>
              <Form.Control type="text" onChange={(e) => setLanguage(e.target.value)} />
            </Form.Group>

            <Button variant="outline-success" type='submit'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try{
      const { data } = await axios.delete(`https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/language/${id}`)
      toast.success(data.message)
      fetchHandler()
    }catch(e) {
      console.log(e)
    }
  }

  const filterData = !query
  ? data
  : data?.filter(
      (i) =>
        i?.language?.toLowerCase().includes(query?.toLowerCase())
    );

  return (
    <>
      <AddRatesModal show={show} onHide={() => setShow(false)} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "black", fontSize: "1.5rem" }}>Languages</p>
        <Button variant="outline-success" onClick={() => setShow(true)}>
          Add New
        </Button>
      </div>
      <div style={{ marginTop: "1%", overflow: "auto" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
            <th>SNo.</th>
              <th>Language</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {data?.map((i , index) => (
            <tr key={index}>
              <td> {index + 1} </td>
              <td>{i.language}</td>
              <td>
                <AiFillDelete color="red" cursor={"pointer"} onClick={() => deleteHandler(i._id)}  />
              </td>
            </tr>
          ) )}
           
          
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Language);
