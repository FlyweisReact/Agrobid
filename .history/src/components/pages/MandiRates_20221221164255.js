/** @format */

import React from "react";
import { Button } from "react-bootstrap";
import HOC from "../layout/HOC";

const MandiRates = () => {
  const show = () => {
    const t = document.getElementById("file");
    t.click();
  };
  return (
    <>
      <Button variant="outline-success" onClick={() => show()}>
        Import Excel Sheet
      </Button>

      <input type={"file"} id="file"  style={{display : 'none }} / >
    </>
  );
};

export default HOC(MandiRates);
