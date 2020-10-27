import { Row } from "antd";
import Axios from "axios";
import { set } from "js-cookie";
import React, { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import { apiUrl } from "../../config.json";
import { LoadingOutlined } from "@ant-design/icons";

const UserBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [mess, setMess] = useState("");
  const [load, setLoad] = useState(false);
  const getBookings = async () => {
    setLoad(true);
    Axios.get(`${apiUrl}/api/booking/user`).then((res) => {
      setBookings(res.data);
      setLoad(false);
      if (res.data.length === 0) {
        setMess(
          "No Bookings available. You can book flight in All Flights section under Flight catergory"
        );
      }
    });
  };
  useEffect(() => {
    getBookings();
  }, []);
  return (
    <div>
      <h1>Your Bookings: </h1>
      {load && <LoadingOutlined />}
      {mess && mess}
      <Row gutter={[16, 32]}>
        {bookings.map((booking) => (
          <BookingCard booking={booking} />
        ))}
      </Row>
    </div>
  );
};

export default UserBooking;
