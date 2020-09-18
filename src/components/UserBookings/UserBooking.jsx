import { Row } from "antd";
import Axios from "axios";
import { set } from "js-cookie";
import React, { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
const UserBooking = () => {
  const [bookings, setBookings] = useState([]);

  const getBookings = async () => {
    Axios.get("/api/booking/user").then((res) => setBookings(res.data));
  };
  useEffect(() => {
    getBookings();
  }, []);
  return (
    <div>
      <h1>Your Bookings: </h1>
      <Row gutter={[16, 32]}>
        {bookings.map((booking) => (
          <BookingCard booking={booking} />
        ))}
      </Row>
    </div>
  );
};

export default UserBooking;
