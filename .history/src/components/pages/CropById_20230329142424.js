import React, { useCallback, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import HOC from "../layout/HOC";
import { useParams } from "react-router-dom";

const CropById = () => {
    const [data, setData] = useState([]);
    const { id } = useParams()
  
    const fetchData = useCallback(async ( ) => {
      try {
          const { data } = await axios.get(
            `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/loding/transporter/${id}`
          );
          setData(data.result);
        } catch (e) {
          console.log(e);
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
              All Loading Data (Total : {data?.length})
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
                <th>Supplier Name</th>
                <th>Transporter name</th>
                <th>Crop</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Delivery Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {i.user?.name} </td>
                  <td> {i.supplier?.name} </td>
                  <td> {i.transpoter?.name} </td>
                  <td> {i.crop} </td>
                  <td> {i.quantity} </td>
                  <td> {i.amount} </td>
                  <td> {i.deliveryDate} </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  };

export default HOC(CropById)