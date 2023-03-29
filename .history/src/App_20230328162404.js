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
import Terms from "./components/pages/Support/Terms";
import Support from "./components/pages/Support/Support";
import Privacy from "./components/pages/Support/Privacy";
import Buyer from "./components/pages/Buyer";
import Supllier from "./components/pages/Supllier";
import MandiRates from "./components/pages/MandiRates";
import LoadingData from "./components/pages/LoadingData";
import Inspection from "./components/pages/Inspection";
import Invoice from "./components/pages/Invoice";
import TranporterLead from "./components/pages/TranporterLead";
import Language from "./components/pages/Language";
import Location from "./components/pages/Location";
import ViewCustomer from "./components/pages/ViewCustomer";
import { NotificationContainer  } from 'react-notifications';
import KYC from "./components/pages/KYC";



function App() {
  return (
    <>
      <ToastContainer />
      <NotificationContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/Loading" element={<LoadingData />} />
        <Route path="/Inspection" element={<Inspection />} />
        <Route path="/Invoice" element={<Invoice />} />
        <Route path="/products/:role" element={<Products />} />
        <Route path="/customer" element={<Customers />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/seller" element={<Supllier />} />
        <Route path="/mandi" element={<MandiRates />} />
        <Route path="/service" element={<Service />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/discount" element={<Discount />} /> 
        <Route path="/cat" element={<Cat />} />
        <Route path="/notify" element={<Notify />} />
        <Route path="/news" element={<News />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tl" element={<TranporterLead />} />
        <Route path="/Language" element={<Language />} />
        <Route path="/location" element={<Location />} />
        <Route path='/customer/:id' element={<ViewCustomer />} />
        <Route path="/kyc/:id" element={<KYC />} />
        <Route path=""
      </Routes>
    </>
  );
}

export default App;
