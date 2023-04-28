import React, { useEffect, useState } from 'react'
import HOC from '../layout/HOC'
import { Table } from 'react-bootstrap'
import axios from 'axios'

const Comments = () => {

    const [ data , setData] = useState([])

    const fetchData = async () => {
        try{
            const { data } = await axios.get("https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/comment")
            setData(data.message)
        }catch(e) { 
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

  return (
   <>
       <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Comments (Total : {data?.length})
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
              <th>SNo.</th>
              <th>Image</th>
              <th> Name </th>
              <th>trade Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
                {data?.map((i , index) => (
                    <tr key={index}>
                    <td> {i.userId?.name} </td>
                    <td> {i.userId?.phoneNumber} </td>
                    <td> <img src= {i.userId?.photo }  </td>
                    </tr>
                ))}
          </tbody>
        </Table>
      </div>

   </>
  )
}

export default HOC(Comments)