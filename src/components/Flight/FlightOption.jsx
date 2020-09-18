import { Avatar, Button, Col, Row } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import "./flight.css";
import React from "react";
import { Link } from "react-router-dom";
const FlightOption = ({ flight }) => {
  console.log(flight);
  const flightDate = (date) => {
    const newDate = new Date(Date.parse(date));
    return newDate.getHours() + ":" + newDate.getMinutes();
  };
  return (
    <>
      <div className="flightOption">
        <div>
          FlightDreamair<br></br>Logo
        </div>
        <div>
          <font className="flightDate">{flightDate(flight.departTime)}</font>{" "}
          <br></br>
          {flight.departAirport}
        </div>
        <div>
          <br></br>
          <i className="fa fa-fighter-jet" aria-hidden="true"></i>
          -----------------
        </div>
        <div>
          <font className="flightDate">{flightDate(flight.arriveTime)}</font>
          <br></br>
          {flight.arriveAirport}
        </div>
        <div
          style={{
            borderLeft: "0.5px dotted grey",
            paddingLeft: "20px",
            paddingTop: "7px",
          }}
        >
          <Button type="primary">
            <Link to={`/dashboard/${flight.flightId}`}>Choose</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default FlightOption;
