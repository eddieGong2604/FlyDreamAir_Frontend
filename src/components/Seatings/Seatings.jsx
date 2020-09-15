import { Row } from "antd";
import React from "react";
import SeatingOption from "./SeatingOption";

const Seatings = () => {
  return (
    <>
      <h1>Choose your seating: </h1>
      <Row justify="space-around">
        <SeatingOption />
        <SeatingOption />
      </Row>
    </>
  );
};

export default Seatings;
