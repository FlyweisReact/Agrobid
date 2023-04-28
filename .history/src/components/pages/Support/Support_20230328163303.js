/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import { AiFillEdit  } from "react-icons/ai";
import axios from "axios";

const Support = () => {
  const [ data , setData ] = useState([])

  const fetchHandler = async () => {
    try{
      const { data } = await axios.get("https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/help/")
      setData(data)
    }catch(e){
      console.log(e)
    }
  }
   useEffect(() => {
    fetchHandler()
   },[])

  return (
  <>
    <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            Help&Support
          </span>
        </div>
      </section>

      <Table striped bordered hover style={{ marginTop: "2%" }}>
        <thead>
          <tr>
            <th>Help&Support</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {data?.map((i , index) => (
          <tr key={index}>
            <td>
            </td>
            <td>
              <AiFillEdit color="blue" cursor="pointer" />
            </td>
          </tr>
        ))}
         
        </tbody>
      </Table>
  </>
    )
}

export default HOC(Support)