import { Avatar, Button, Col, Row } from "antd";
import { SendOutlined } from "@ant-design/icons";
import "./flight.css";
import React from "react";
import { Link } from "react-router-dom";
const FlightOption = ({ flight }) => {
  console.log(flight);
  const flightDate = (date) => {
    const newDate = new Date(Date.parse(date));
    if (newDate.getHours() < 10) {
      return "0" + newDate.getHours() + ":" + newDate.getMinutes();
    }
    return newDate.getHours() + ":" + newDate.getMinutes();
  };
  return (
    <>
      <div className="flightOption">
        <div style={{ paddingTop: 10 }}>
          <font
            className="flightDate"
            style={{ color: "#1890ff", fontSize: 15 }}
          >
            {flight.flightNumber}
          </font>{" "}
        </div>
        <div>
          <font className="flightDate">{flightDate(flight.departTime)}</font>{" "}
          <br></br>
          {flight.departAirport.substring(0, 3)}
        </div>
        <div>
          <br></br>
          <SendOutlined style={{ color: "#1890ff" }} />
        </div>
        <div>
          <font className="flightDate">{flightDate(flight.arriveTime)}</font>
          <br></br>
          {flight.arriveAirport.substring(0, 3)}
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
