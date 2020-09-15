import React from "react";

import { Form, Input, Button, Checkbox } from "antd";
const CheckOut = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
        </Form.Item>
      </Form>
    </>
  );
};

export default CheckOut;
