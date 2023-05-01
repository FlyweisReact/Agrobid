
import React  from "react";
import HOC from '../layout/HOC'
import Table from "react-bootstrap/Table";
import { Modal, Form, Button } from "react-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
;

const Tax = () => {
    const [modalShow, setModalShow] = React.useState(false);
  

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
              Edit
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Group className="mb-3">
                <Form.Label>Tax</Form.Label>
                <Form.Control type="number" min={0} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Commission</Form.Label>
                <Form.Control type="number" min={0} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Other Expenses</Form.Label>
                <Form.Control type="number" min={0} />
              </Form.Group>
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      );
    }

    const fetchData = async () => {
      try { 
        const { data } = await axios.get(")
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
          <div className="pb-4 w-full flex justify-between items-center bg-white">
            <span className="tracking-widest text-slate-900 font-semibold uppercase ">
              Tax
            </span>
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
            <tr>
                <td>5%</td>
                <td>5%</td>
                <td>5%</td>
                <td>
                    <AiFillEdit color="blue" onClick={() => setModalShow(true)} cursor='pointer' />
                </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  };
  

export default HOC(Tax)