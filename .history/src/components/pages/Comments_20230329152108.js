/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Button, Table, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Comments = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [id, setId] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/comment"
      );
      setData(data.message);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/comment/${id}`
      );
      console.log(data);
      toast.success("Deleted");
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [ reply , setReply ] = useState("")

    const putHandler = async(e) =>{
      e.preventDefault()
      try{
        const { data } = await axios.put(`https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/comment/${id}` , {reply })
        console.log(data)
        toast.success("Added")
        fetchData()
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
          <Modal.Title id="contained-modal-title-vcenter">Reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={putHandler}> 
            <Form.Group className="mb-3">
              <Form.Label>Reply</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
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
            All Comments (Total : {data?.length})
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
              <th>SNo.</th>
              <th>User Name</th>
              <th>Phone Number</th>
              <th>Image</th>
              <th>Comment</th>
              <th>Rating</th>
              <th>Reply</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {i.userId?.name} </td>
                <td> {i.userId?.phoneNumber} </td>
                <td>
                  {" "}
                  <img
                    src={i.userId?.photo}
                    alt=""
                    style={{ width: "100px" }}
                  />{" "}
                </td>
                <td> {i.comment} </td>
                <td> {i.rating} </td>
                <td>
                  <div className="d-flex gap-1">
                    {i.reply}
                    <Button
                      onClick={() => {
                        setId(i._id);
                        setModalShow(true);
                      }}
                    >
                      Add Reply
                    </Button>
                  </div>
                </td>
                <td>
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => deleteHandler(i._id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Comments);
