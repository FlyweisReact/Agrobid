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
        style={{
          width: "100%",
          overflowX: "scroll",
        }}
      >
        <Table
          striped
          bordered
          hover
        >
          <thead>
            <tr>
              <th> User </th>
              <th>Location</th>
              <th>Lot Id</th>
              <th>Crop</th>
              <th>Grade</th>
              <th>Variety</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Total Boga</th>
              <th>Expected Rate</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
              <td> {index + 1} </td>
                <td> {i.name} </td>
                <td> {i.location} </td>
                <td> {i.lotId} </td>
                <td> {i.crop} </td>
                <td> {i.grade} </td>
                <td> {i.variety} </td>
                <td> {i.quantity} </td>
                <td> {i.rate} </td>
                <td> {i.totalBags} </td>
                <td> {i.expectedRate} </td>
                <td> {i.status === true ? <p>True</p> : <p>False</p>} </td>

                {/* <td>
                  <Button
                    style={{ borderRadius: "0", textAlign: "center" }}
                    onClick={() => {
                      setEdit(true);
                      setModalShow(true);
                    }}
                  >
                    Send
                  </Button>
                </td> */}
                <td>
                  <AiFillEdit
                    color="blue"
                    cursor={"pointer"}
                    onClick={() => {
                      setId(i._id);
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

export default HOC(Supllier);
