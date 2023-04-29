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
  const [ query , setQuery  ] = useState(""
  )
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

    const editHandler = async (e) => {
      e.preventDefault()
      try {
        const { data } = await axios.put(`https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/placebid/update/${bidId}` , {
          quantity
        })
        console.log(data)
        alert('Edited')
        setModalShow(false)
        fetchData()
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
          <Form onSubmit={editHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" min={0} onChange={(e) => setQuantity(e.target.value)} />
            </Form.Group>

            <Button type='submit'>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  
  const filterData = !query
    ? data
    : data?.filter(
        (i) =>
          i?.crop?.name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.bidDetail?.lotId
            ?.toString()
            ?.toLowerCase()
            .includes(query?.toLowerCase())
      );


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
               
                </tr>
              </tbody>
            </Table>
          </div>
        </>
      ) : (
     <>
     </>
      )}
    </>
  );
};

export default HOC(BuyerBid);