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
  const [secondTab, setSecondTab] = useState(false);
  const [show, setShow] = useState(false);
  // const [lotId , setlotId ] = useState("")
  const [lotIdData, setLotIdData] = useState([]);

  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/createbid/${role}`
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  }, [role]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const fetchSingleBid = async (lotId) => {
    try {
      const { data } = await axios.post(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev//createbid/lotId`,
        {
          lotId,
        }
      );
      setLotIdData(data);
      console.log(data);
      setSecondTab(true);
    } catch (e) {
      console.log(e);
    }
  };

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

  // Top 10 Bidder
  function BidModal(props) {
    const [each, setEach] = useState([]);

    const fetchBidder = useCallback(async () => {
      try {
        const { data } = await axios.post(
          `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/createbid/waitlist/bid/${id}`
        );
        setEach(data);
      } catch (e) {
        console.log(e);
      }
    }, []);

    useEffect(() => {
      if (props.show === true) {
        fetchBidder();
      }
    }, [fetchBidder, props.show]);

    const postHandler = async ( bidId , status) => {
      try {
        const { data } = await axios.post(
          `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/createbid/payment/status/${bidId}`,
          {
            status,
          }
        );
        console.log(data);
        fetchBidder();
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
            Top 10 Bidder
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {each?.message?.map((item) => (
              item?.top?.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td> {i.user?.tradeName} </td>
                  <td> {i.status} </td>
                  <td>
                    <span className="d-flex gap-2">
                      <i
                        className="fa-solid fa-circle-xmark"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          // setBidId(;
                          postHandler("decline");
                        }}
                      ></i>
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "green", cursor: "pointer" }}
                        onClick={() => {
                          setBidId(i.createbid);
                          postHandler("accept");
                        }}
                      ></i>
                    </span>
                  </td>
                </tr>
              ))
            ))}
             
            </tbody>
          </Table>
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
      <BidModal show={show} onHide={() => setShow(false)} />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            {data?.data?.[0]?.supplierData?.tradeName} Bids
          </span>
        </div>
      </section>

      {secondTab ? (
        <>
          <Button
            onClick={() => setSecondTab(false)}
            variant="outline-success"
            style={{ marginBottom: "10px" }}
          >
            Back
          </Button>
          <div
            style={{
              overflow: "auto",
            }}
          >
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Lot Id</th>
                  <th>Product Name</th>
                  <th>Variety</th>
                  <th>Grade</th>
                  <th>Quantity</th>
                  <th>Total Bags</th>
                  <th> Moisture </th>
                  <th> Ad Mixture </th>
                  <th>Foreign Matter </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {lotIdData?.result?.[0]?.lotId} </td>
                  <td> {lotIdData?.result?.[0]?.crop?.name} </td>
                  <td> {lotIdData?.result?.[0]?.variety} </td>
                  <td> {lotIdData?.result?.[0]?.grade} </td>
                  <td> {lotIdData?.result?.[0]?.quantity} </td>
                  <td> {lotIdData?.result?.[0]?.totalBags} </td>
                  <td> {lotIdData?.result?.[0]?.crop?.moisture} </td>
                  <td> {lotIdData?.result?.[0]?.crop?.extraneous} </td>
                  <td> {lotIdData?.result?.[0]?.crop?.foreign} </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </>
      ) : (
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td
                    onClick={() => {
                      fetchSingleBid(i.lotId);
                    }}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    {" "}
                    {i.lotId}{" "}
                  </td>

                  <td> {i.user_id?.tradeName} </td>

                  <td> {i.crop?.name} </td>
                  <td> {i.status} </td>
                  <td> {i.expiretime?.slice(0, 10)} </td>
                  <td> {i.expectedRate} </td>
                  <td> {i.topBid} </td>
                  <td> {i.count} </td>

                  <td>
                    <Button
                      onClick={() => {
                        setId(i._id);
                        setShow(true);
                      }}
                    >
                      View
                    </Button>
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => {
                        setId(i._id);
                        setModalShow(true);
                      }}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default HOC(Products);
