/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Cat = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/banner/"
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
    const [img, setImg] = useState("");

    const postthumbImage = (url) => {
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
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const postdata = async (e) => {
      e.preventDefault();
      if (img.length < 5) {
        alert("Image is uploading wait a min.");
      } else {
        try {
          const { data } = await axios.post(
            "http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/banner/",
            { image: img }
          );
          console.log(data);
          fetchData();
          toast.success("Added");
          props.onHide();
        } catch (e) {
          console.log(e);
        }
      }
    };

    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Banner
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
            onSubmit={postdata}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                required
                onChange={(e) => postthumbImage(e.target.files[0])}
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

  const DeleteHandler = async (id) =>{
    try{
      const { data} = await axios.delete(`http://ec2-15-206-210-177.ap-south-1.compute.amazonaws.com:4002/banner/${id}`)
      console.log(data)
      toast.success('Deleted')
      fetchData()
    }catch(e) { 
      console.log(e)
    }
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Banner
          </span>
          <Button
            variant="outline-success"
            onClick={() => {
              setModalShow(true);
            }}
          >
            Add Banner
          </Button>
        </div>
      </section>

      <section
        className="main-card--container"
        style={{ color: "black", marginBottom: "10%" }}
      >
        {data?.map((i, index) => (
          <div className="card-container" key={index}>
            <div className="card">
              <div className="card-body">
                <img
                  src={i.image}
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />

                <Button
                  variant="outline-danger"
                  style={{ width: "100%", marginTop: "1%" }}
                  onClick={() => DeleteHandler(i._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default HOC(Cat);
