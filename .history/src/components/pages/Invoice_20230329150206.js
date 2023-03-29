/** @format */

import React from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";

const data = [
  {
    Image: "https://www.computerhope.com/jargon/g/guest-user.jpg",
    Id: "1234567890sadd",
    Customer: "Aayush Kashyap",
    OrderDate: "7835878473",
    DeliveryDate: "kashyapaayush3945@gmail.com",
  },
  {
    Image: "https://www.computerhope.com/jargon/g/guest-user.jpg",
    Id: "dsa1ds4d1sd346431",
    Customer: "Kashyap",
    OrderDate: "7835878473",
    DeliveryDate: "kashyapaayush3945@gmail.com",
  },
  {
    Image: "https://www.computerhope.com/jargon/g/guest-user.jpg",
    Id: "1234567890sadd",
    Customer: "Aayush",
    OrderDate: "7835878473",
    DeliveryDate: "kashyapaayush3945@gmail.com",
  },
  {
    Image: "https://www.computerhope.com/jargon/g/guest-user.jpg",
    Id: "1234567890sadd",
    Customer: "Aayush",
    OrderDate: "7835878473",
    DeliveryDate: "kashyapaayush3945@gmail.com",
  },
];

const Invoice = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Invoice's
          </span>
        </div>
      </section>

      <div style={{ width: "100%", overflow: "scroll" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Crop</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Payment Mode</th>
              <th>Location</th>
              <th>Phone Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((i) => (
              <tr>
                <td> Num4512 </td>
                <td> Coriander </td>
                <td> User1 </td>
                <td> ₹5000 </td>
                <td>Online</td>
                <td>Delhi</td>
                <td>451236981</td>
                <td>SuccessFull</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default HOC(Invoice);
