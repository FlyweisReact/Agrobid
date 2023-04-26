/** @format */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../../layout/HOC";
import Spinner from "react-bootstrap/Spinner";

const News = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [paginate, setPaginate] = useState(0);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/auth/news/all"
      );
      setData(data.message);
      setFilteredData(data?.message?.slice(paginate, paginate + 5));
    } catch (E) {
      console.log(E);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  function AddRatesModal(props) {
    const [loading, setLoading] = useState("");
    const [img, setImg] = useState("");
    const [message, setMessage] = useState("");
    const [link, setLink] = useState("");
    const [name, setName] = useState("");

    const postthumbImage = (url) => {
      setLoading("uploading");
      const data = new FormData();
      data.append("file", url);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dbcnha741");
      fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImg(data.url);
          setLoading("done");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const postData = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/auth/addNews/",
          { photo: img, message, link, name }
        );
        console.log(data);
        fetchData();
        toast.success("Added");
        props.onHide();
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
          <Modal.Title id="contained-modal-title-vcenter">Add News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postData}>
            {loading === "uploading" ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              ""
            )}
            {loading === "done" ? "Image Uploaded Successfully" : ""}

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                required
                onChange={(e) => postthumbImage(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>TItle</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setLink(e.target.value)}
              />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  // Delete Data
  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/auth/news/${id}`
      );
      console.log(data);
      fetchData();
      toast.success("Delted");
    } catch (e) {
      console.log(e);
    }
  };

  const nextHandle = () => {
    setFilteredData(data?.slice(paginate, paginate + 5));
    setPaginate(paginate + 5);
  };
  
  // paginate <= data?.length
  return (
    <>
      <AddRatesModal show={show} onHide={() => setShow(false)} />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "black", fontSize: "1.5rem" }}>
          News (Total : {data?.length}){" "}
        </p>
        <Button
          variant="outline-success"
          onClick={() => {
            setShow(true);
          }}
        >
          Add News
        </Button>
      </div>


          
      <div style={{ marginTop: "2%", overflow: "auto" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SNo.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((i, index) => (
              <tr key={index}>
                <td> #{index + 1} </td>
                <td>
                  {" "}
                  <img
                    src={i.photo}
                    alt={i.name}
                    style={{ width: "100px" }}
                  />{" "}
                </td>
                <td> {i.name} </td>
                <td> {i.message} </td>
                <td>
                  <a href={i.link} target="_blank" rel="noreferrer">
                    <Button>Go</Button>
                  </a>
                </td>
                <td>
                  <div className="d-flex gap-2">
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => deleteHandler(i._id)}
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default HOC(News);
