/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Products = () => {
  const { role } = useParams();
  const [modalShow, setModalShow] = React.useState(false);
  const [id, setId] = useState("");
  const [data, setData] = useState("");

  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/createbid/${role}`
      );
      setData(data);
      console.log(data)
    } catch (e) {
      console.log(e);
    }
  }, [role]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  function MyVerticallyCenteredModal(props) {
    const [expiretime, setExpireTime] = useState("");

    const putHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.put(
          `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/createbid/verifyByAdmin/${id}`,
          { expiretime }
        );
        console.log(data);
        toast.success("Success");
        props.onHide();
        fetchHandler();
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={putHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Expiry Time</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(e) => setExpireTime(e.target.value)}
              />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
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
            {data?.data?.[0]?.supplierData?.tradeName} Bids
          </span>
        </div>
      </section>

      {/* <div
        style={{
          overflow: "auto",
        }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SNo.</th>
              <th>Lot Id</th>
              <th>Name</th>
              <th>Crop</th>
              <th>Grade</th>
              <th>Variety</th>
              <th>Quantity</th>
              <th>Total Bags</th>
              <th>Expected Rate</th>
              <th>Status</th>
              <th>Count</th>
              <th>Top Bid</th>
              <th>Active Time</th>
              <th>Expiry Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((i, index) => (
              <tr key={index}>
                <td> #{index + 1} </td>
                <td> {i.lotId} </td>
                <td> {i.supplierData?.name} </td>
                <td> {i.crop} </td>
                <td> {i.grade} </td>
                <td> {i.variety} </td>
                <td> {i.quantity} </td>
                <td> {i.totalBags} </td>
                <td> {i.expectedRate} </td>
                <td> {i.status} </td>
                <td> {i.count} </td>
                <td> {i.topBid} </td>
                <td> {i.activetime} </td>
                <td> {i.expiretime} </td>
                <td>
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => {
                      setId(i._id);
                      setModalShow(true);
                    }}
                  ></i>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div> */}

      <div
        style={{
          overflow: "auto",
        }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SNo.</th>
              <th>Lot Id</th>
              <th>Supp Name</th>
              <th>Crop</th>
              <th>Status</th>
              <th>Expiry Time Edit</th>
              <th>Expected Bid</th>
              <th>Highest Bid</th>
              <th>Total Bid</th>
              <th>Top 10 Bidder/ Remaining Bidder</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((i, index) => (
              <tr key={index}>
                <td> #{index + 1} </td>
                <td> {i.lotId} </td>
                <td> {i.supplierData?.tradeName} </td>
                <td> {i.crop} </td>
                <td> {i.status} </td>
                <td> {i.expiretime} </td>
                <td> Expected Time </td>
                <td> Highest Time </td>
                <td> {i.topBid} </td>
                <td>
                <span>
                <i className="fa-solid fa-circle-xmark"></i>
                <i className="fa-solid fa-circle-check"></i>
                </span>
                 </td>
             
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Products);
