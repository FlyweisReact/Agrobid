/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { AiFillEdit } from "react-icons/ai";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Supllier = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/admin/supplier"
      );
      setData(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const editStatus = async (e) => {
      e.preventDefault();
      try {
        const data = await axios.put(
          `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/createbid/verifyByAdmin/${id}`
        );
        console.log(data);
        setModalShow(false);
        toast.success("Status Changed");
        fetchData();
      } catch (err) {
        console.log(err);
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
            Change Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container style={{ color: "black" }}>
            <Form>
              <Button onClick={editStatus}>Change Status</Button>
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
            All Supplier's (Total : {data?.length})
          </span>
        </div>
      </section>

      <div
      className="table-responsive table-card"
      >
        <Table className="table table-nowrap table-centered align-middle">
          <thead className="bg-light text-muted">
            <tr>
              <th scope="col"> SNo. </th>
              <th scope="col"> Image </th>
              <th scope="col"> Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Trade Name</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td class="fw-medium"> {index + 1} </td>
                <td>
                  {" "}
                  <img
                    src={
                      i.photo
                        ? i.photo
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWgg1mjdrrer5asSh0TiJKDkdg40UEHc3uw&usqp=CAU"
                    }
                    alt="User"
                    style={{width  : '100px'}}
                  />{" "}
                </td>

                <td> {i.name} </td>
                <td> {i.phoneNumber} </td>
                <td> {i.address} </td>
                <td> {i.email} </td>
                <td> {i.tradeName} </td>
                <td> {i.role} </td>
                <td>
                <i className="fa-solid fa-eye" style={{color:' #0b64fe'}}></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Supllier);
