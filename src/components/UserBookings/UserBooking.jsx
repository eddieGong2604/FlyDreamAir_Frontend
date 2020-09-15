import { Row } from "antd";
import React, { useState } from "react";
import BookingCard from "./BookingCard";
const UserBooking = () => {
  const [bookings, setBookings] = useState([]);

  return (
    <div>
      <h1>Your Bookings: </h1>
      <Row justify="space-around">
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </Row>
    </div>
  );
};

export default UserBooking;
