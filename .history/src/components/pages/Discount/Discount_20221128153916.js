/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";

const Detail = [
  {
    name: "React",
    adhaar:
      "https://new-img.patrika.com/cdn-cgi/image/width=798,quality=100/https://new-img.patrika.com/upload/2021/12/14/aashshar458.jpg",
    pan: "https://images.hindi.news18.com/ibnkhabar/uploads/2021/11/PAN-Card-News.jpg",
    Gst: "4515AADSCFDF45",
    Trade: "React1",
  },
  {
    name: "React",
    adhaar:
      "https://new-img.patrika.com/cdn-cgi/image/width=798,quality=100/https://new-img.patrika.com/upload/2021/12/14/aashshar458.jpg",
    pan: "https://images.hindi.news18.com/ibnkhabar/uploads/2021/11/PAN-Card-News.jpg",
    Gst: "4515AADSCFDF45",
    Trade: "React1",
  },
];

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
            <th> RC </th>
          </tr>
        </thead>
        <tbody>
          {Detail.map((i, index) => (
            <tr key={index}>
              <td> {i.name} </td>
              <td>
                {" "}
                <img src={i.adhaar} alt="" className="fast-food" />{" "}
              </td>
              <td>
                {" "}
                <img src={i.pan} alt="" className="fast-food" />{" "}
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Discount);
