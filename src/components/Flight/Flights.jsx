import Axios from "axios";
import React, { useEffect, useState } from "react";
import FlightOption from "./FlightOption";
const Flights = () => {
  const [flights, setFlights] = useState([{}, {}]);

  const getFlights = async () => {
    Axios.get("/api/flight/").then((res) => setFlights(res.data));
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
      {flights.map((flight) => (
        <FlightOption flight={flight} />
      ))}
    </div>
  );
};

export default Flights;
