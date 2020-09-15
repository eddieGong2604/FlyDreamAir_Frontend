import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import Axios from "axios";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignUpComponent = () => {
  const onFinish = (values) => {
    Axios({
      method: "post",
      url: "/api/auth/signup",
      data: values,
    })
      .then(console.log)
      .catch(console.log);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Passport Number"
        name="passportNumber"
        rules={[
          { required: true, message: "Please input your Passport number!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpComponent;
