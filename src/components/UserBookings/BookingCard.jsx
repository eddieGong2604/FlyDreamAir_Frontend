import { Button, Card, Col, Modal } from "antd";
import React, { useState } from "react";
import { CalendarTwoTone } from "@ant-design/icons";

const BookingCard = ({ booking }) => {
  const [visible, setVisible] = useState(false);
  console.log(booking);
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <Col span={6}>
      <Modal
        footer={null}
        title="Booking Info"
        visible={visible}
        onCancel={handleCancel}
      >
        <p>
          <b>Amount Paid:</b> {booking.bookingPrice} AUD
        </p>
        <p>
          <b>Seating Class:</b> {booking.seating.seatingClass}
        </p>
        <p>
          <b>Discount:</b>{" "}
          {booking.voucher ? (
            <>{booking.voucher.discount * 100}%</>
          ) : (
            "No discount"
          )}
        </p>
      </Modal>
      <Card
        title={
          <>
            <CalendarTwoTone /> Flight Booking #{booking.bookingId}
          </>
        }
        bordered={true}
        size="small"
      >
        <p>
          {" "}
          <b>Airline:</b> {booking.seating.flight.airlineName}
        </p>
        <p>
          <b>From:</b> {booking.seating.flight.departAirport}
          <br></br>
          <b>To:</b> {booking.seating.flight.arriveAirport}
        </p>
        <Button type="default" onClick={showModal}>
          {" "}
          Details{" "}
        </Button>
      </Card>
    </Col>
  );
};

export default BookingCard;
