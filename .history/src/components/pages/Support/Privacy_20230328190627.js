
import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { Modal , Form , Button } from 'react-bootstrap'
import { AiFillDelete  } from "react-icons/ai";
import axios from "axios";

const Privacy = () => {
  const [ data , setData ] = useState([])
  const [modalShow, setModalShow] = React.useState(false);


  const fetchHandler = async () =>{
    try{
      const { data } = await axios.get("https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/privacy")
      setData(data)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    fetchHandler()
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
          <Modal.Title id="contained-modal-title-vcenter">
           Privacy Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
          <Form.Group className="mb-3">
            <Form.Label>Privacy </Form.Label>
          </Form.Group>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
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
          Privacy Policy
          </span>
          <Button onClick={() => setModalShow(true)} variant='outline-success' >Add</Button>
        </div>
      </section>

      <Table striped bordered hover >
        <thead>
          <tr>
          <th> SNo. </th>
            <th>Privacy Policy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {data?.data?.map((i,index) => (
          <tr key={index}>
          <td> {index + 1 } </td>
            <td>
         {i.privacy}
            </td>
            <td>
              <AiFillDelete color="red" cursor="pointer" />
            </td>
          </tr>
        ))}
         
        </tbody>
      </Table>
  </>
  )
}

export default HOC(Privacy)