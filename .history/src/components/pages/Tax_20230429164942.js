
import React, { useEffect, useState } from "react";
import HOC from '../layout/HOC'
import Table from "react-bootstrap/Table";
import { Modal, Form, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

const Tax = () => {
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
  
    const fetchHandler = async () => {
      try {
        const { data } = await axios.get(
          "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/privacy"
        );
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      fetchHandler();
    }, []);
  
    function MyVerticallyCenteredModal(props) {
      const [privacy, setP] = useState("");
  
      const postHandler = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/privacy",
            { privacy }
          );
          console.log(data);
          fetchHandler()
          toast.success('Added')
          props.onHide()
        } catch (e) {
          console.log(e);
        }
      };
  
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Privacy Policy
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={postHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Privacy Policy</Form.Label>
                <Form.Control type="text" onChange={(e) => setP(e.target.value)} />
              </Form.Group>
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      );
    }
  
    const deleteHandler = async (id ) => {
      try { 
        const { data } = await axios.delete(`https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/privacy/${id}`)
        console.log(data)
        fetchHandler()
        toast.success('Deleted')
      }catch(e){
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
              Tax
            </span>
            <Button onClick={() => setModalShow(true)} variant="outline-success">
              Add
            </Button>
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
            {data?.data?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td>{i.privacy}</td>
                <td>
                  <AiFillDelete color="red" cursor="pointer"  onClick={() => deleteHandler(i._id)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  };
  

export default HOC(Tax)