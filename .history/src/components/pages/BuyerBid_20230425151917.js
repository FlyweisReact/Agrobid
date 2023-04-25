import React, { useState, useEffect, useCallback } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useParams } from "react-router-dom";

const BuyerBid = () => {
  const [data, setData] = useState([]);
  const { id } = useParams()
  const [ secondTab , setSecondTab ] = useState(false)

  const fetchData = useCallback(async() => {
    try {
      const { data } = await axios.get(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/placebid/getbuyer/${id}`
      );
      setData(data.details);
      console.log(data)
    } catch (E) {
      console.log(E);
    }
  },[id])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Buyer Bid
          </span>
        </div>
      </section>

      {/* <div
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
              <th>SNo.</th>
              <th> Product </th>
              <th>HighestBid</th>
              <th>Buyer Name</th>
              <th>Buyer Phone Number</th>
              <th>Quantity</th>
              <th>Lot Id</th>
              <th>Crop</th>
              <th>Supplier Name</th>
              <th>Supplier Phone Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
            
                <td> {i.product} </td>
                <td> {i.highestBid} </td>
                <td> {i.BuyerData?.name} </td>
                <td> {i.BuyerData?.phoneNumber} </td>
                <td> {i.quantity} </td>
                <td> {i.bidDetail?.lotId} </td>
                <td> {i.crop} </td>
                <td> {i.bidDetail?.supplierData?.name} </td>
                <td> {i.bidDetail?.supplierData?.phoneNumber} </td>
                <td> {i.status} </td>
          
              </tr>
            ))}
          </tbody>
        </Table>
      </div> */}

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
            <th> SNo. </th>
            <th> Lot Id  </th>
            <th> Supp Name </th>
            <th> Crop  </th>
            <th> Status  </th>
            <th>Expiry Time  </th>
            <th> Your Bid  </th>
            <th>Highest Bid  </th>
            <th>Total Bid  </th>
            <th>Inspection Requested  </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> #{index + 1} </td>
                <td style={{color : 'blue' , cursor : 'pointer'}} > {i.bidDetail?.lotId} </td>
                <td> {i.bidDetail?.supplierData?.tradeName} </td>
                <td> {i.crop} </td>
                <td> {i.status} </td>
                <td> Expiry Time </td>
                <td> Your Bid </td>
                <td>Highest Bid </td>
                <td> Total Bid </td>
                <td> Inspection Requested </td>
          
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {secondTab ? (
       <>
       <Button onClick={() => setSecondTab(false)} variant='outline-success' style={{marginBottom : '10px'}} >Back</Button>
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
                <th>Product Name</th>
                <th>Variety</th>
                <th>Grade</th>
                <th>Quantity</th>
                <th>Total Bags</th>
                <th> Moisture </th>
                <th> Color </th>
                <th> Ad Mixture   </th>
                <th>Foreign Matter  </th>
              </tr>
            </thead>
            <tbody>
          <tr>
            <td>#1</td>
            <td>123123</td>
            <td>Product Name</td>
            <td>Variety</td>
            <td>Grade</td>
            <td>Quantity</td>
            <td>Total Bags</td>
            <td>Moisture</td>
            <td>Color</td>
            <td>Ad Moisture</td>
            <td> Foreign Matter </td>
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
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td
                    onClick={() => setSecondTab(true)}
                    style={{ color: "blue", cursor: "pointer" }}
                  >
                    {" "}
                    {i.lotId}{" "}
                  </td>
                  <td> {i.supplierData?.tradeName} </td>
                  <td> {i.crop} </td>
                  <td> {i.status} </td>
                  <td> {i.expiretime} </td>
                  <td> Expected Time </td>
                  <td> Highest Time </td>
                  <td> {i.topBid} </td>
                  <td>
                    <span
                      className="d-flex gap-2"
                      style={{ alignItems: "center" }}
                    >
                      Ramesh
                      <i
                        className="fa-solid fa-circle-xmark"
                        style={{ color: "red" }}
                      ></i>
                      <i
                        className="fa-solid fa-circle-check"
                        style={{ color: "green" }}
                      ></i>
                    </span>
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

export default HOC(BuyerBid)