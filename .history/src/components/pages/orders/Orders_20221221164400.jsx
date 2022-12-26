/** @format */

import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";

const pay = [
  {
    name: "React",
    crop: "Product",
    Amount: 4521,
  },
  {
    name: "React",
    crop: "Product",
    Amount: 4521,
  },
  {
    name: "React",
    crop: "Product",
    Amount: 4521,
  },
];

const Orders = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Payments
          </span>
        </div>
      </section>
      <Table striped bordered hover style={{ marginTop: "2%" }}>
        <thead>
          <tr>
            <th>User</th>
            <th>Supplier</th>
            <th>Crop</th>
            <th>Amount </th>
          </tr>
        </thead>
        <tbody>
          {pay.map((i) => (
            <tr>
              <td> {i.name} </td>
              <td> {i.crop} </td>
              <td> {i.Amount} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Orders);
