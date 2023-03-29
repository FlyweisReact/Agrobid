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
            `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/crop/user/${id}`
          );
          setData(data.message);
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
              All User Crop
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
                <th>Crop</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  {i.crop?.map((item , index) =>(
                    <td> key={index} > {item}  </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  };

export default HOC(CropById)