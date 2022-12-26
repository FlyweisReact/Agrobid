
import React from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillEdit, AiOutlineEdit } from "react-icons/ai";

const Privacy = () => {
  return (
  <>
       <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            pRIVATerms&Condition
          </span>
        </div>
      </section>

      <Table striped bordered hover style={{ marginTop: "2%" }}>
        <thead>
          <tr>
            <th>Privacy Policy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              n publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on mea
            </td>
            <td>
              <AiFillEdit color="blue" cursor="pointer" />
            </td>
          </tr>
        </tbody>
      </Table>
  </>
  )
}

export default HOC(Privacy)