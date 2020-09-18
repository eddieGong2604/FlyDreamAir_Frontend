import React, { useState } from "react";

import { Form, Input, Button, Checkbox, Modal } from "antd";
import Axios from "axios";
import { apiUrl } from "../../config.json";

const CheckOut = (props) => {
  const [error, setError] = useState("");
  const [booking, setBooking] = useState({});
  const [visible, setVisible] = useState(false);

  const onFinish = (values) => {
    Axios({
      method: "post",
      url: `${apiUrl}/api/booking/me`,
      data: {
        voucherCode: values.voucherCode,
        seatingId: props.match.params.seatingId,
      },
    }).then((res) => {
      if (!res.data.message) {
        setBooking(res.data);
        setVisible(true);
      } else {
        setError(res.data.message);
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    setVisible(false);
    setError("");
    window.location = "/dashboard";
  };
  return (
    <>
      <Modal
        footer={null}
        title="Booking Sucessful"
        visible={visible}
        onCancel={handleCancel}
      >
        {booking.initialPrice === booking.afterPrice ? (
          <h3>Booking Price: {booking.initialPrice} AUD</h3>
        ) : (
          <h3>
            Booking Price: <strike>{booking.initialPrice}</strike>{" "}
            {booking.afterPrice} AUD
          </h3>
        )}
      </Modal>

      <Form
        name="basic"
        initialValues={{ voucherCode: "" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Enter Your Voucher Code (Optional):"
          name="voucherCode"
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Checkout
          </Button>
          <p style={{ color: "red" }}>{error}</p>
        </Form.Item>
      </Form>
    </>
  );
};

export default CheckOut;
