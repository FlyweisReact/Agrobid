/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Inventory = () => {
  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/crop"
  //     );
  //     setData(data.message);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Crops ( Total : {data?.length})
          </span>
        </div>
      </section>

      <div style={{ overflow: "auto" }}>
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
              <th>SNo. </th>
              <th> Image </th>
              <th> Crop</th>
              <th> User</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td>
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/57d2a26b20099eb50e305b38/1658791857222-LQ0C620Z125PLV9GTBAB/savoy-cabbage-illustration.jpg?format=1000w"
                    alt=""
                    className="fast-food"
                  />
                </td>
                <td>
                  {" "}
                  {i.crop?.map((item, index) => (
                    <span key={index}> {item} , </span>
                  ))}{" "}
                </td>
                <td>{i.userId}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(Inventory);
