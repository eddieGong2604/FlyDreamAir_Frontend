import React, { Component, useEffect, useState } from "react";

import { Form, Input, Button, Checkbox } from "antd";
import Axios from "axios";
import httpService from "../../services/httpService";
import authService from "../../services/authService";
import { useRef } from "react";
import Home from "../Home";
import { LoadingOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginComponent = () => {
  const [load, setLoad] = useState(false);

  let btnRef = useRef();
  const [error, setError] = useState("");

  useEffect(() => {}, [error]);

  const onFinish = (values) => {
    setLoad(true);
    authService
      .login(values)
      .then(() => {
        setLoad(false);
        window.localStorage.setItem("isLoggedIn", "true");
        window.location = "/";
      })
      .catch(() => {
        setLoad(false);
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
        {load && <LoadingOutlined />}
      </Form.Item>
    </Form>
  );
};

export default LoginComponent;
