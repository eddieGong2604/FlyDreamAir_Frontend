import { Button, Col, Row } from "antd";
import { RightSquareTwoTone } from "@ant-design/icons";

import React from "react";
import { Link } from "react-router-dom";
const FlightOption = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col flex={1}>VN787</Col>

      <Col flex={2}>
        13:30PM <br></br> Sydney Airport
      </Col>
      <Col flex={3}>
        <RightSquareTwoTone />
      </Col>
      <Col flex={4}>
        {" "}
        21:30PM <br></br> Noi Bai Airport
      </Col>

      <Col flex={2}>
        <Button type="primary">
          <Link to="/dashboard/flightId">Choose</Link>
        </Button>
      </Col>
    </Row>
  );
};

export default FlightOption;
