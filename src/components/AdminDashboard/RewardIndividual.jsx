import React, { Component, useRef, useState } from "react";
import { Form, Input, Button, Checkbox, Tabs } from "antd";
import Axios from "axios";
import { apiUrl } from "../../config.json";
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 16 },
};
const RewardIndividual = () => {
  const [error, setError] = useState("");
  let btnRef = useRef();
  const onFinish = (values) => {
    console.log(values);
    Axios({
      method: "post",
      url: `${apiUrl}/api/voucher/reward`,
      data: values,
    })
      .then((res) => {
        btnRef.current.removeAttribute("disabled");
        if (res.data.success) {
          setError("reward success");
        } else {
          setError(res.data.message);
        }
      })
      .catch((res) => {
        btnRef.current.removeAttribute("disabled");
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
        label="Target Username"
        name="username"
        rules={[{ required: true, message: "Please input username" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Value (%):"
        name="value"
        rules={[{ required: true, message: "Please input value4" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button ref={btnRef} type="primary" htmlType="submit">
          Submit
        </Button>
        <p style={{ color: "blue" }}>{error}</p>
      </Form.Item>
    </Form>
  );
};

export default RewardIndividual;
