/** @format */

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import axios from "axios";

const Login = () => {
  const [pass, setPass] = useState(false);
  const [inputpass, setInputpass] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/admin/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", data.message);
      navigate("/dashboard");
      toast.success("Welcome");
    } catch (err) {
      console.log("err", err);
      toast.error("Check Your Credentials");
      setLoading(false);
    }
  };

  return (
    <>
    <div className="bg">

    </div>
    
    </>
  );
};

export default Login;
