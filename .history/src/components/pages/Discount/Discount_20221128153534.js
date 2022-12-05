import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";


const Discount = () => {


  return (
    <>
      {" "}
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Documents
          </span>
        </div>
      </section>
      <Table
        striped
        bordered
        hover
        style={{
          marginTop: "5%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>UserName</th>
            <th>Adhaar Card</th>
            <th>Pan Card</th>
            <th> Gst Number </th>
            <th> Trade Name </th>
            <th> RC  </th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Discount);
