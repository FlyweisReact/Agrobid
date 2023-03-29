/** @format */

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HOC from "../layout/HOC";

const ViewCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // Fetch Data
  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/auth/${id}`
      );
      setData(data.details);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  return (
    <>
      <div>
        <p style={{ color: "black", fontSize: "1.5rem" }}> {data?.name} </p>
      </div>

      <div>
        <div className="sup">
          <div className="left">
            <img
              src={
                data?.photo
                  ? data?.photo
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              alt="user"
            />
          </div>
          <div className="mid">
            <p>Name : {data?.name} </p>
            <p>Phone Number : {data?.phoneNumber} </p>
            <p>Email :{data?.name} </p>
            <p>Location : {data?.name} </p>
            <p>Role :{data?.name} </p>
          </div>
          <div className="mid">
            <p>Trade Name : {data?.tradeName} </p>
            <p>Role : {data?.role} </p>
          </div>

          <div className="right">
            <button
              onClick={() => navigate(`/kyc/${data?._id}`)}
              className="btn"
            >
              KYC
            </button>
            <br />
            <br />
            {data?.role === "Buyer" || data?.role === "Supplier" ? (
              <>
                <button
                  className="hover-btn"
                  onClick={() =>
                    navigate(`/crop/${data?._id}/${data?.name}`)
                  }
                >
                  Crop
                </button>
                <br />
                <br />
              </>
            ) : (
              ""
            )}

            {data?.role === "Buyer" ? (
              <>
                <button
                  className="hover-btn"
                  onClick={() => navigate(`/buyer/bid/${data?._id}`)}
                >
                  {" "}
                  Bid
                </button>
                <br />
                <br />
              </>
            ) : (
              ""
            )}

            {data?.role === "Supplier" ? (
              <>
                <button
                  className="hover-btn"
                  onClick={() => navigate(`/products/${data?._id}`)}
                >
                  {" "}
                  Bid
                </button>
                <br />
                <br />
              </>
            ) : (
              ""
            )}
            {data?.role === "Transporter" ? (
              <>
                <button
                  className="hover-btn"
                  onClick={() => navigate(`/loading/${data?._id}`)}
                >
                  {" "}
                  Loading Data
                </button>
                <br />
                <br />
              </>
            ) : (
              ""
            )}

            <button
              className="hover-btn"
              onClick={() => navigate(`/products/${data?._id}`)}
            >
              Transaction
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(ViewCustomer);
