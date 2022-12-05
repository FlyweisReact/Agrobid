import React, { useState } from "react";
import HOC from "../../layout/HOC";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";


const cat = [
  {
    img : 'https://jssors8.azureedge.net/demos/image-slider/img/px-fun-man-person-2361598-image.jpg' , 
    name : 'Banner'
  },
  {
    img : 'https://assets-global.website-files.com/6019e43dcfad3c059841794a/62d6de37454aa5754ad51ba5_home%20page%20image.jpg' , 
    name : 'Banner'
  },
  {
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXcQAZfXJomxrUgjvNSLyHCR53ASiAi5D48BJUIzhMtyDUwS-AMqD00KRD941_Afjqt8&usqp=CAU' , 
    name : 'Banner'
  },
]

const Cat = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg-down"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Banner
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            style={{
              color: "black",
              margin: "auto",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="New"
                required
              />
            </Form.Group>

            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
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
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add-Banner
          </Button>
        </div>
      </section>

      <section
        className="main-card--container"
        style={{ color: "black", marginBottom: "10%" }}
      >
        {cat.map((i) => {
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={i.img}
                      style={{ width: "100%", height: "200px" }}
                      alt=''
                    />
                    <div className="card-title">{i.name}</div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="outline-info"
                        onClick={() => {
                          setModalShow(!modalShow);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
 </>
  );
};

export default HOC(Cat);
