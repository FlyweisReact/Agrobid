
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const KrishiSalah = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [dataCount, setDataCount] = useState("");
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState("");
  
    // Fetch Data
    const fetchData = async (e) => {
      try {
        const { data } = await axios.get(
          "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/mandi/all"
        );
        setData(data);
        setDataCount(data.message.length);
      } catch (E) {
        console.log(E);
      }
    };
  
    useEffect(() => {
      fetchData();
      window.scrollTo(0,0)
    }, []);
  

    return (
      <>
    
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "black", fontSize: "1.5rem" }}>
            Krishi Salah (Total : {dataCount}){" "}
          </p>
         
        </div>
        <div style={{ marginTop: "2%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Product</th>
                <th>Location</th>
                <th>Date</th>
                <th>Arrival</th>
                <th>Min Price</th>
                <th>Max Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.message?.map((i, index) => (
                <tr key={index}>
                  <td> #{index + 1} </td>
                  <td> {i.product} </td>
                  <td> {i.location} </td>
                  <td> {i.Date} </td>
                  <td> {i.arrival} </td>
                  <td> {i.minPrice} </td>
                  <td> {i.maxPrice} </td>
                  <td>
                    <div className="d-flex gap-2">
                      <i
                        class="fa-solid fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteHandler(i._id)}
                      ></i>
                      <i
                        class="fa-solid fa-edit"
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => {
                          setId(i._id);
                          setEdit(true);
                          setShow(true);
                        }}
                      ></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  };
  
export default HOC(KrishiSalah)