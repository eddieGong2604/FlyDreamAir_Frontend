import React from "react";
import queryString from "query-string";
import { Button, Form, PageHeader } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { apiUrl } from "../../config.json";

import Axios from "axios";
import TextArea from "antd/lib/input/TextArea";
import { useRef } from "react";
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const Enquiry = ({ location }) => {
  let btnRef = useRef();
  const [error, setError] = useState("");
  const [enq, setEnq] = useState({
    enquiryId: "",
    from: "",
    subject: "",
    content: "",
    reply: "",
    status: false,
  });
  const enqId = queryString.parse(location.search);
  const id = enqId.id;

  const getEnq = async () => {
    await Axios.get(`${apiUrl}/api/enquiry/admin/${id}`)
      .then((res) => {
        setEnq(res.data);
      })
      .catch((res) => setEnq(null));
  };

  useEffect(() => {
    getEnq();
  }, []);

  const onFinish = (values) => {
    values.subject = enq.subject;
    values.content = enq.content;
    Axios({
      method: "PUT",
      url: `${apiUrl}/api/enquiry/admin/allEnquiries/${id}`,
      data: values,
    })
      .then((res) => {
        if (res.data.success) {
          window.location = `/admin/enquiry?id=${id}`;
          setError("Reply sent");
        } else {
          setError(res.data.message);
        }
      })
      .catch((res) => {
        setError(res.message);
      });
  };
  const onFinishFailed = () => {};
  return (
    <div style={{ margin: 20 }}>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={`Enquiry #${id} (${enq.status ? "Solved" : "Unsolved"})`}
      ></PageHeader>
      {enq && enq.from && (
        <div>
          <p>
            <font color="#1890ff" size="4">
              Subject:
            </font>{" "}
            {enq.subject}
          </p>

          <p>
            <font color="#1890ff" size="4">
              From:
            </font>{" "}
            {enq.from.username}
          </p>

          <p>
            <font color="#1890ff" size="4">
              Content:
            </font>{" "}
            {enq.content}
          </p>

          <p>
            <font color="#1890ff" size="4">
              Admin Reply:
            </font>{" "}
            {enq.reply ? enq.reply : "Admin hasn't replied yet"}
          </p>
          <h3>Reply:</h3>

          <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label=""
              name="reply"
              rules={[{ required: true, message: "Please input your reply" }]}
            >
              <TextArea />
            </Form.Item>
            <Button
              type="default"
              style={{ marginTop: 8 }}
              type="default"
              htmlType="submit"
              ref={btnRef}
            >
              Respond
            </Button>
            <p style={{ color: "blue" }}>{error}</p>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Enquiry;
