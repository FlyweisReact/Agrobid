/** @format */

import React, {  } from "react";
import HOC from "../layout/HOC";
import { Table } from "react-bootstrap";

const data = [
  {
    Lot: "1",
    Product: "Product",
    Quantity: "5",
    Loc: "Delhi",
    LocDate: "11/20/1222",
    Delivey: "Delhi",
    deliveryD: "11/20/1222",
    Vnumber: "1122",
    status: "Complete",
   
  },
  {
    Lot: "2",
    Product: "Product",
    Quantity: "5",
    Loc: "Delhi",
    LocDate: "11/20/1222",
    Delivey: "Delhi",
    deliveryD: "11/20/1222",
    Vnumber: "1122",
    status: "Complete",
   
  },
  {
    Lot: "3",
    Product: "Product",
    Quantity: "5",
    Loc: "Delhi",
    LocDate: "11/20/1222",
    Delivey: "Delhi",
    deliveryD: "11/20/1222",
    Vnumber: "1122",
    status: "Complete",
   
  },

];
const TranporterLead = () => {
  // const [query, setQuery] = useState("");

  // const handlerChange = (e) => {
  //   setQuery(e.target.value);
  // };

  // const filter = !query
  //   ? data
  //   : data.filter((i) => i?.Lot?.toLowerCase().includes(query?.toLowerCase()));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "black", fontSize: "1.6rem" }}>Transporter Lead</p>
        {/* <input
          type="search"
          style={{
            width: "300px",
            border: "1px solid black",
            color: "black",
            padding: "5px",
            height: "40px",
            fontSize: "18px",
          }}
        /> */}
      </div>

      <div style={{ overflow: "auto", marginTop: "2%" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Lot Id</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Pick up Location</th>
              <th>Pick up Date</th>
              <th>Delivery Location </th>
              <th>Delivery Date</th>
              <th>Vehicle Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i, index) => (
              <tr key={index}>
                <td>{i.Lot} </td>
                <td>{i.Product} </td>
                <td>{i.Quantity} </td>
                <td>{i.Loc} </td>
                <td>{i.LocDate} </td>
                <td>{i.Delivey} </td>
                <td>{i.deliveryD} </td>
                <td>{i.Vnumber} </td>
                <td>{i.status} </td>
       
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(TranporterLead);
