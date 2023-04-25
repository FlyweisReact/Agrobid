import React, { useState, useEffect, useCallback } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

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



      {secondTab ? (
       <>
       <Button onClick={() => setSecondTab(false)} variant='outline-success' style={{marginBottom : '10px'}} >Back</Button>
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
            <th> Variety  </th>
            <th> Grade  </th>
            <th> Quantity  </th>
            <th> Total Bags  </th>
            <th> Moisture  </th>
            <th>  Color   </th>
            <th> Ad Mixture  </th>
            <th> Foreign Matter  </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> #{index + 1} </td>
                <td> {i.bidDetail?.lotId} </td>
                <td> {i.bidDetail?.variety} </td>
                <td> {i.bidDetail?.grade} </td>
                <td> {i.bidDetail?.quantity} </td>
                <td> {i.bidDetail?.totalBags} </td>
                <td> Mositure </td>
                <td> Color </td>
                <td> Ad Mixtuer </td>
                <td> Foregin Matter </td>     
              </tr>
            ))}
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
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> #{index + 1} </td>
                <td style={{color : 'blue' , cursor : 'pointer'}} onClick={() => setSecondTab(true)} > {i.bidDetail?.lotId} </td>
                <td> {i.bidDetail?.supplierData?.tradeName} </td>
                <td> {i.crop} </td>
                <td> {i.status} </td>
                <td> Expiry Time </td>
                <td> Your Bid </td>
                <td>Highest Bid </td>
                <td> Total Bid </td>
                <td> Inspection Requested </td>
                <td>Edit Status</td>
          
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