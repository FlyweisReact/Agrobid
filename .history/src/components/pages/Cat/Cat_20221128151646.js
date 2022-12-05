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
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [id, setId] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://nikhil-backend.herokuapp.com/api/v1/banner",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [setData, token, axios]);

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
          <Button variant="outline-success" onClick={() => navigate("/addCat")}>
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
                          setId(i._id);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => deleteData(i.name)}
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

      {/* <div class="gallery" id="gallery">
        {data?.data?.map(
          (i, index) =>
  

            // <div
            //   class="mb-3 pics animation all 1"
            //   key={index}
            //   style={{ border: "1px solid black", borderRadius: "10px" }}
            // >
            //   <img
            //     class="img-fluid"
            //     src={i.link}
            //     style={{ width: "400px", height: "200px" }}
            //     alt="Card image cap"
            //   />
            //   <p style={{ color: "black", textAlign: "center" }}>{i.name}</p>
            // </div>
        )}
      </div> */}

      {/* <div style={{ display: "flex"  }}>
        {data?.data?.map((i, index) => (
          <div>
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img
                variant="top"
                src={i.link}
                width="300px"
                height="200px"
                className="fluid"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div> */}

      {/* <Table
        striped
        bordered
        hover
        style={{
          marginTop: "5%",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((i) => (
            <tr>
              <td>
                <img
                  src={i.link}
                  alt={i.name}
                  style={{
                    width: "100px",
                    borderRadius: "100%",
                    height: "100px",
                  }}
                />
              </td>
              <td> {i.name} </td>

              <td style={{ display: "flex", gap: " 40px" }}>
                {" "}
                <AiFillDelete
                  color="red"
                  cursor="pointer"
                  onClick={() => deleteData(i._id)}
                />{" "}
                <AiOutlineEdit
                  color="blue"
                  cursor="pointer"
                  onClick={() => {
                    setModalShow(true);
                    setId(i._id);
                  }}
                />{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table> */}
    </>
  );
};

export default HOC(Cat);
