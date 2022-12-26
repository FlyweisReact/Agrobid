/** @format */

import HOC from "../../layout/HOC";
import Table from "react-bootstrap/Table";

const pay = [
  {
    name: "React",
    crop: "Product",
    Amount: 4521,
  },
  {
    name: "React",
    crop: "Product",
    Amount: 4521,
  },
  {
    name: "React",
    crop: "Product",
    Amount: 4521,
  },
];

const Orders = () => {
  return (
    <>
      <section>
        <div className="pb-4 sticky top-0  w-full flex justify-between items-center bg-white">
          <span className="tracking-widest text-slate-900 font-semibold uppercase ">
            All Payments
          </span>
        </div>
      </section>

      <Table striped bordered hover style={{ marginTop: "2%" }}>
        <thead>
          <tr>
            <th>User</th>
            <th>Supplier</th>
            <th>Crop</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Advance</th>
            <th>Due</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {pay.map((i) => (
            <tr>
              <td> {i.name} </td>
              <td> Supplier </td>
              <td> {i.crop} </td>
              <td> 5 Ton</td>
              <td> 12/02/2002 </td>
              <td> 5000function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Send OTP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container style={{ color: "black" }}>
          <Form>
            <Form.Group>
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{6}"
                placeholder="124563"
              />
            </Form.Group>
            <br />
            <Button>Send</Button>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
</td>
              <td> {i.Amount} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HOC(Orders);
