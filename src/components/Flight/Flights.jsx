import Axios from "axios";
import React, { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

import FlightOption from "./FlightOption";
import { apiUrl } from "../../config.json";

const Flights = () => {
  const [flights, setFlights] = useState([]);

  const getFlights = async () => {
    Axios.get(`${apiUrl}/api/flight/`).then((res) => setFlights(res.data));
  };
  useEffect(() => {
    getFlights();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>All Flights: </h1>
      {flights[0] && flights.length > 0 ? "" : <LoadingOutlined />}
      {flights.map((flight) => (
        <FlightOption flight={flight} />
      ))}
    </div>
  );
};

export default Flights;
