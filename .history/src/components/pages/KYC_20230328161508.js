import React, { useState , useCallback, useEffect} from 'react'
import HOC from '../layout/HOC'
import {Table} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const KYC = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
  
    // Fetch Data
    const fetchHandler = useCallback(async () => {
      try {
        const { data } = await axios.get(
          `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/kyc/user/${id}`
        );
        setData(data);
        console.log(data)
        
      } catch (e) {
        console.log(e);
      }
    }, [id]);
  
    useEffect(() => {
      fetchHandler();
    }, [fetchHandler]);
  
  
    let UserName = data?.data?.[1]?.user?.name;
    let UserRole = data?.data?.[1]?.user?.role;
    let UserId = data?.data?.[1]?.user?._id
    
  return (
    <>
         <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
           {UserName} Document 
          </span>
        </div>
      </section>

      <div>
        <div className="sup">
          <div className="left">
            <img
              src={
                data?.data?.[1]?.user?.photo
                  ? data?.data?.[1]?.user?.photo
                  : "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=861"
              }
              alt="user"
              style={{ width: "400px" }}
            />
          </div>
          <div className="mid">
            <p>Name : {UserName} </p>
            <p>Phone Number: </p>
            <p>Address : </p>
            <p>Email :  </p>
            <p>Trade Name :  </p>
            <p>Role :  </p>
          </div>
          <div className="mid">
            <p>Adhaar Number : {UserName} </p>
            <p>Pan Number : {data?.data?.[1]?.user?.tradeName}</p>
            <p>City :{data?.data?.[1]?.user?.email}</p>
            <p>District : {data?.data?.[1]?.user?.address} </p>
            <p>Gst Number : {UserRole} </p>
            <p>Pin Code : {UserRole} </p>
            <p>State : {UserName} </p>

          </div>
          <div className="mid">
            <p>Pan Number : {data?.data?.[1]?.user?.tradeName}</p>
            <p>City :{data?.data?.[1]?.user?.email}</p>
            <p>District : {data?.data?.[1]?.user?.address} </p>
            <p>Gst Number : {UserRole} </p>
            <p>Pin Code : {UserRole} </p>
          </div>
          <div className="right">
            <p> Bank : {data?.bank?.[1]?.bankName}</p>
            <p> Account Number : {data?.bank?.[1]?.accountNumber}</p>
            <p> Account Holder Name : {data?.bank?.[1]?.accountHolderName}</p>
            <p> IFSC Code : {data?.bank?.[1]?.ifscCode}</p>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default HOC(KYC)