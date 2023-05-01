/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const Inventory = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/items"
      );
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function AddCrop(props) {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [variaty, setVariety] = useState("");
    const [moisture, setMoisture] = useState("");
    const [extraneous, setExtraneous] = useState("");
    const [foreign, setForign] = useState("");
    const [ gradeArray ,  setGradeArray ] = useState([])
    const [ varietyArray ,  setGradeArray ] = useState([])

    const uploadImage = (e) => {
      const data = new FormData();
      data.append("file", e.target.files[0]);
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dbcnha741");
      fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.url);
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    function handleAddButtonClick() {
      setGradeArray(prevArray => [...prevArray, grade]);
      setGrade("")
      toast.success("Grade Added")
    }

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/items",
          {
            image,
            name,
            grade : gradeArray,
            variaty,
            moisture,
            extraneous,
            foreign,
          }
        );
        console.log(data);
        toast.success("Added");
        fetchData();
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
          <Modal.Title id="contained-modal-title-vcenter">Add Crop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={(e) => uploadImage(e)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Form.Group className="mb-3">
                <Form.Label>Grade</Form.Label>
                <Form.Control
                  type="text"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                />
              </Form.Group>
             <img src='https://www.pngarts.com/files/3/Plus-Symbol-PNG-Image-with-Transparent-Background.png' alt='' style={{width : '30px' , cursor : 'pointer'}}  onClick= {() => handleAddButtonClick()} />
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Form.Group className="mb-3">
                <Form.Label>Variety</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setVariety(e.target.value)}
                />
              </Form.Group>
              <img src='https://www.pngarts.com/files/3/Plus-Symbol-PNG-Image-with-Transparent-Background.png' alt='' style={{width : '30px' , cursor : 'pointer'}} />
            </div>


            <Form.Group className="mb-3">
              <Form.Label>Moisture</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setMoisture(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Extraneous Matter </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setExtraneous(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Foreign Matter</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setForign(e.target.value)}
              />
            </Form.Group>

            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://djqtflksic.execute-api.ap-south-1.amazonaws.com/dev/items/${id}`
      );
      console.log(data);
      toast.success("Deleted");
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  const filterData = !query
    ? data?.result
    : data?.result?.filter((i) =>
        i?.name?.toLowerCase().includes(query?.toLowerCase())
      );

  return (
    <>
      <AddCrop show={modalShow} onHide={() => setModalShow(false)} />

      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Crops
          </span>
          <Button variant="outline-success" onClick={() => setModalShow(true)}>
            Add Crop
          </Button>
        </div>
      </section>

      <div style={{ marginTop: "2%" }}>
        <div style={{ color: "black" }}>
          Search:{" "}
          <input
            type={"search"}
            style={{
              border: "1px solid #bfbfbf",
              width: "250px",
              color: "black",
              padding: "5px",
            }}
            placeholder="Search by Name "
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div style={{ overflow: "auto" }}>
        <Table
          striped
          bordered
          hover
          style={{
            marginTop: "2%",
          }}
        >
          <thead>
            <tr>
              <th>SNo. </th>
              <th> Crop Image </th>
              <th> Crop Name </th>
              <th> Variety </th>
              <th> Grade </th>
              <th> Moisture </th>
              <th> Extraneous Matter </th>
              <th>Foreign Matter</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filterData?.map((i, index) => (
              <tr key={index}>
                <td>#{index + 1} </td>
                <td>
                  <img src={i.image} alt="" style={{ width: "100px" }} />
                </td>
                <td> {i.name} </td>
                <td>
                  {" "}
                  {i.variaty?.map((i, index) => (
                    <ul key={index} style={{ listStyleType: "disc" }}>
                      <li> {i} </li>
                    </ul>
                  ))}{" "}
                </td>
                <td>
                  {" "}
                  {i.grade?.map((i, index) => (
                    <ul key={index} style={{ listStyleType: "disc" }}>
                      <li> {i} </li>
                    </ul>
                  ))}{" "}
                </td>
                <td> {i.moisture} </td>
                <td> {i.extraneous} </td>
                <td> {i.foreign} </td>
                <td>
                  <i
                    class="fa-solid fa-delete-left"
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

export default HOC(Inventory);
