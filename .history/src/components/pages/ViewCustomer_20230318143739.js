/** @format */

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import HOC from "../layout/HOC";

const ViewCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <p style={{ color: "black", fontSize: "1.5rem" }}>View {name} </p>
      </div>

      {/* Supplier */}
      {role === "Supplier" ? (
        <div>
          <div className="sup">
            <div className="left">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="mid">
              <p>Name : {name} </p>
              <p>Trade Name : Abhishek Supplier</p>
              <p>Email : Abhishek@gmail.com </p>
              <p>Location : Delhi </p>
              <p>Role : {role} </p>
            </div>
            <div className="right">
              <p> Bank : Canara</p>
              <p> Account Number : 515414257896</p>
              <p> Account Holder Name : Abhishek</p>
              <p> IFSC Code : CANs4512</p>
            </div>
            <div className="right">
              <button onClick={() => navigate("/discount")} className='btn'>KYC</button>
              <br />
              <br />
              <button
                className="hover-btn"
                onClick={() => navigate(`/products/${role}`)}
              >
                {" "}
                Bid
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Buyer  */}
      {role === "Buyer" ? (
        <div>
          <div className="sup">
            <div className="left">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="mid">
              <p>Name : {name} </p>
              <p>Trade Name : Karan Buyer</p>
              <p>Email : Karan@gmail.com </p>
              <p>Location : Delhi </p>
              <p>Role : {role} </p>
            </div>
            <div className="right">
              <p> Bank : Canara</p>
              <p> Account Number : 515414257896</p>
              <p> Account Holder Name : Abhishek</p>
              <p> IFSC Code : CANs4512</p>
            </div>
            <div className="right">
              <button onClick={() => navigate("/discount")} className='btn'>KYC</button>
              <br />
              <br />
              <button
                className="hover-btn"
                onClick={() => navigate(`/products/${role}`)}
              >
                {" "}
                Bid
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Transporter */}
      {role === "Transporter" ? (
        <div>
          <div className="sup">
            <div className="left">
              <img
                src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png "
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="mid">
              <p>Name : {name} </p>
              <p>Vehicle Number : 0110</p>
              <p>Location : Uttar pradesh</p>
              <p>Role : {role} </p>
            </div>
            <div className="right">
              <p> Fleet : LCV</p>
              <p> Capacity : 1MT</p>
              <p> Vehicle Route : All India Permit</p>
            </div>
            <div className="right">
              <button onClick={() => navigate("/discount")} className='btn'>KYC</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default HOC(ViewCustomer);
