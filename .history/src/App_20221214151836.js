/** @format */

import { Routes, Route } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./components/pages/orders/Orders";
import Products from "./components/pages/products/Products";
import Customers from "./components/pages/Customers/Customers";
import Service from "./components/pages/Services/Service";
import Payment from "./components/pages/Payment/Payment";
import Inventory from "./components/pages/Inventory/Inventory";
import Discount from "./components/pages/Discount/Discount";
import Cat from "./components/pages/Cat/Cat";
import Notify from "./components/pages/Notification/Notify";
import News from "./components/pages/News/News";


function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/orders" element={<Orders />} />

        <Route path="/products" element={<Products />} />

        <Route path="/customer" element={<Customers />} />

        <Route path="/service" element={<Service />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/inventory" element={<Inventory />} />

        <Route path="/discount" element={<Discount />} /> 

        <Route path="/cat" element={<Cat />} />

        <Route path="/notify" element={<Notify />} />

        <Route path="/news" element={<News />} />

        <Route path="/terms" 

      </Routes>
    </>
  );
}

export default App;
