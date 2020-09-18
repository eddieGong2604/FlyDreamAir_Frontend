import React, { Component, useEffect, useState } from "react";

import { Form, Input, Button, Checkbox } from "antd";
import Axios from "axios";
import httpService from "../../services/httpService";
import authService from "../../services/authService";
import { useRef } from "react";
import { Redirect } from "react-router-dom";
import Home from "../Home";
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginComponent = () => {
  let btnRef = useRef();
  const [error, setError] = useState("");

  useEffect(() => {}, [error]);

  const onFinish = (values) => {
    authService
      .login(values)
      .then(() => {
        window.localStorage.setItem("isLoggedIn", "true");
        window.location = "/dashboard";
      })
      .catch(() => {
        setError("Username or Password Invalid");
        btnRef.current.removeAttribute("disabled");
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
        {error ? <p style={{ color: "red" }}>{error}</p> : null}
      </Form.Item>
    </Form>
  );
};

export default LoginComponent;
