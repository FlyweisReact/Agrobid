/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const LoadingData = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://ajeet-backend-new.vercel.app/api/v1/loding/all"
      );
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [users, setUsers] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [trans, setTrans] = useState([]);

    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(
          "https://ajeet-backend-new.vercel.app/api/v1/admin/users"
        );
        setUsers(data.users);
      } catch (e) {
        console.log(e);
      }
    };

    const fetchSupplier = async () => {
      try {
        const { data } = await axios.get(
          "https://ajeet-backend-new.vercel.app/api/v1/admin/supplier"
        );
        setSuppliers(data.message);
      } catch (e) {
        console.log(e);
      }
    };

    const fetchTransporter = async () => {
      try {
        const { data } = await axios.get(
          "https://ajeet-backend-new.vercel.app/api/v1/admin/transpoter"
        );
        setTrans(data.message);
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      if (props.show === true) {
        fetchSupplier();
        fetchUsers();
        fetchTransporter();
      }
    }, [props.show]);

    const [user, setU] = useState("");
    const [supplier, setS] = useState("");
    const [crop, setC] = useState("");
    const [quantity, setQ] = useState("");
    const [amoumt, setA] = useState(0);
    const [deliveryDate, setD] = useState("");
    const [transpoter, setT] = useState("");
    const TotalAmount = Number (amoumt)

    const postData = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://ajeet-backend-new.vercel.app/api/v1/loding/add",
          { user, supplier, crop, quantity, amoumt : TotalAmount, deliveryDate, transpoter }
        );
        console.log(data);
        fetchData();
        props.onHide();
        toast.success("added");
      } catch (e) {
        console.log(e);
      }

    };


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Loading Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container style={{ color: "black" }}>
            <Form onSubmit={postData}>
              <Form.Group className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setU(e.target.value)}
                >
                  <option>-- Select User --</option>
                  {users?.map((user, index) => (
                    <option key={index} value={user._id}>
                      {" "}
                      {user.name}{" "}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setS(e.target.value)}
                >
                  <option>-- Select Supplier --</option>
                  {suppliers?.map((user, index) => (
                    <option key={index} value={user._id}>
                      {" "}
                      {user.name}{" "}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setT(e.target.value)}
                >
                  <option>-- Select Transporter --</option>
                  {trans?.map((user, index) => (
                    <option key={index} value={user._id}>
                      {" "}
                      {user.name}{" "}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Crop</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setC(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setQ(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setA(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Delivery Date</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => setD(e.target.value)}
                />
              </Form.Group>

              <Button type="submit">Submit</Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://ajeet-backend-new.vercel.app/api/v1/loding/delete/${id}`
      );
      console.log(data);
      fetchData();
      toast.success("Deleted");
    } catch (e) {
      console.log(e);
    }
  };

  const filterData = !query
    ? data
    : data?.filter(
        (i) =>
          i?.crop?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.supplier?.name?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.deliveryDate?.toLowerCase().includes(query?.toLowerCase())
      );

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Loading's (Total : {data?.length})
          </span>
          <Button onClick={() => setModalShow(true)}> Add Loading Data </Button>
        </div>
      </section>

      <div style={{ marginTop: "2%" }}>
        <div style={{ color: "black" }}>
          Search:{" "}
          <input
            type={"search"}
            style={{
              border: "1px solid #bfbfbf",
              width: "400px",
              color: "black",
              padding: "5px",
            }}
            placeholder="Search by Supplier Name , Crop , Delivery Date.."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          overflowX: "scroll",
          marginTop: "2%",
        }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Sno.</th>
              <th>User</th>
              <th> Supllier </th>
              <th>Vehicle Number</th>
              <th>Crop</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Delivery Expected</th>
              <th>Transporter</th>
              <th>Days Left</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterData?.map((i, index) => (
              <tr key={index}>
                <td> {index + 1} </td>
                <td> {i.user?.name} </td>
                <td> {i.supplier?.name} </td>
                <td> {i.vechicle_Id?.vehicleNumber} </td>
                <td> {i.crop} </td>
                <td> {i.quantity} </td>
                <td> ₹{i.amount} </td>
                <td> {i.deliveryDate} </td>
                <td> {i.transpoter?.name} </td>
                <td> {i.deliveryStatus} </td>
                <td>
                  <i
                    class="fa-solid fa-trash"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => deleteHandler(i._id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(LoadingData);
