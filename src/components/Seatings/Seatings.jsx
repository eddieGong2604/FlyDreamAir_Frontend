import { Row } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import SeatingOption from "./SeatingOption";
import { apiUrl } from "../../config.json";
import { LoadingOutlined } from "@ant-design/icons";

const Seatings = (props) => {
  const [seatings, setSeatings] = useState([]);
  const getSeatings = async () => {
    Axios.get(
      `${apiUrl}/api/seating/flightId=${props.match.params.flightId}`
    ).then((res) => setSeatings(res.data));
  };

  useEffect(() => {
    getSeatings();
  }, []);
  return (
    <>
      <h1>Choose your Seating</h1>
      {!seatings || (seatings.length === 0 && <LoadingOutlined />)}
      <Row justify="space-around">
        {seatings.map((seating) => (
          <SeatingOption seating={seating} />
        ))}
      </Row>
    </>
  );
};

export default Seatings;
