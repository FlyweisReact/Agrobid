/** @format */

import React, { useState, useEffect, useCallback } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";

const BuyerBid = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [secondTab, setSecondTab] = useState(false);
  const [lotIdData, setLotIdData] = useState([]);
  const [ modalShow , setModalShow ] = useState(false)
  const [ bidId , setBidId ] = useState("")

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/placebid/getbuyer/${id}`
      );
      setData(data.details);
      console.log(data);
    } catch (E) {
      console.log(E);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
    const [ quantity , setQuantity] = useState("")

    const editHandler = async () => {
      try {
        const { data } = await axios.put(`https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/placebid/update/${bidId}` , {
          quantity
        })
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
          <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" min={0} />
            </Form.Group>

            <Button type='submit'>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
    <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(true)} />
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Buyer Bid
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
              width: "100%",
              overflowX: "scroll",
            }}
          >
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> Lot Id </th>
                  <th> Variety </th>
                  <th> Grade </th>
                  <th> Quantity </th>
                  <th> Total Bags </th>
                  <th> Moisture </th>
                  <th> Ad Mixture </th>
                  <th> Foreign Matter </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {lotIdData?.result?.[0]?.lotId} </td>
                  <td> {lotIdData?.result?.[0]?.crop?.variaty} </td>
                  <td> {lotIdData?.result?.[0]?.crop?.grade} </td>
                  <td> {lotIdData?.result?.[0]?.quantity} </td>
                  <td> {lotIdData?.result?.[0]?.totalBags} </td>
                  <td> {lotIdData?.result?.[0]?.crop?.moisture} </td>
                  <td> {lotIdData?.result?.[0]?.crop?.extraneous} </td>
                  <td> {lotIdData?.result?.[0]?.crop?.foreign} </td>
                  <td>
                    <i
                      className="fa-solid fa-edit"
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={() => setModalShow(true)}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </>
      ) : (
        <div
          style={{
            width: "100%",
            overflowX: "scroll",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> SNo. </th>
                <th> Lot Id </th>
                <th> Supp Name </th>
                <th> Crop </th>
                <th> Quantity </th>
                <th> Status </th>
                <th>Expiry Time </th>
                <th> Your Bid </th>
                <th>Highest Bid </th>
                <th>Total Bid </th>
                <th>Inspection Requested </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => {
                      fetchSingleBid(i.bidDetail?.lotId);
                    }}
                  >
                    {" "}
                    {i.bidDetail?.lotId}{" "}
                  </td>
                  <td> {i.bidDetail?.supplierData?.tradeName} </td>
                  <td> {i.crop?.name} </td>
                  <td> {i.status} </td>
                  <td> {i.bidDetail?.expiretime?.slice(0, 10)} </td>
                  <td> {i.highestBid} </td>
                  <td> {i.bidDetail?.topBid} </td>
                  <td> {i.bidDetail?.count} </td>
                  <td> {i.inspection === false ? "False" : "True"} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default HOC(BuyerBid);
