/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import { Modal, Form, Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
const Tax = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);



  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/tax"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {

    const [ tax , setTax ] = useState("")
    const [ others_charges , setOthersCharges ] = useState("")
    const [ others ,setOthers  ] = useState("")

    const postHandler = async (e) => {
      e.preventDefault()
      try{  
        const { data } = await axios.post("https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/tax" , {
          tax  , others , others_charges
        })
        console.log(data)
        fetchData()
        props.onHide()
      }catch(e) {
        console.log(e)
      }
    }

    const deleteHandler = async(id) => {
      try{
        const { data } = await axios.delete(`https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/tax
        `)
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
          <Modal.Title id="contained-modal-title-vcenter">Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Tax</Form.Label>
              <Form.Control type="number" min={0} onChange={(e) => setTax(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Commission</Form.Label>
              <Form.Control type="number" min={0} onChange={(e) => setOthersCharges(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Other Expenses</Form.Label>
              <Form.Control type="number" min={0} onChange={(e) => setOthers(e.target.value)} />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
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
        <div className="pb-4 w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Tax
          </span>
          <Button  onClick={() => setModalShow(true)} >Add Tax</Button>
        </div>
      </section>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tax</th>
            <th>Commission</th>
            <th>Other Expenses</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.result?.map((i, index) => (
            <tr key={index}>
              <td> {i.tax}% </td>
              <td> {i.others_charges}%</td>
              <td>{i.others}% </td>
              <td>
                <AiFillEdit
                  color="blue"
                  
                  cursor="pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Tax);
