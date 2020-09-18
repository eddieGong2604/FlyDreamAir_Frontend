import React, { Component, useRef, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import Axios from "axios";
import { apiUrl } from "../../config.json";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignUpComponent = () => {
  const [error, setError] = useState("");
  let btnRef = useRef();

  const onFinish = (values) => {
    Axios({
      method: "post",
      url: `${apiUrl}/api/auth/signup`,
      data: values,
    })
      .then((res) => {
        btnRef.current.removeAttribute("disabled");
        if (res.data.success) {
          window.location = "/";
        } else {
          setError(res.data.message);
        }
      })
      .catch((res) => {
        setError(res.message);
      });

    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }
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
        <Button ref={btnRef} type="primary" htmlType="submit">
          Submit
        </Button>
        <p style={{ color: "red" }}>{error}</p>
      </Form.Item>
    </Form>
  );
};

export default SignUpComponent;
