
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const KrishiSalah = () => {
    const [data, setData] = useState([]);
  
    // Fetch Data
    const fetchData = async (e) => {
      try {
        const { data } = await axios.get(
          "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/post/"
        );
        setData(data);
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
            Krishi Salah (Total : ${data?.data?.length} ){" "}
          </p>
        </div>
        <div style={{ marginTop: "2%", overflow: "auto" }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Text</th>
              </tr>
            </thead>
            <tbody> 
                    {data?.data?.map((i , index) => (
                        <tr key={index}>
                            <td> #{index + 1} </td>
                            <td> {i.text} </td>
                        </tr>
                    ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  };
  
export default HOC(KrishiSalah)