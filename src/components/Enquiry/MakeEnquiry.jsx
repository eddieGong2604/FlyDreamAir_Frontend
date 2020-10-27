import React, { useRef, useState } from "react";
import { Form, Input, Checkbox } from "antd";
import { Button, Modal } from "antd";
import { apiUrl } from "../../config.json";
import Axios from "axios";
import TextArea from "antd/lib/input/TextArea";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const MakeEnquiry = () => {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  let btnRef = useRef();

  const onFinish = (values) => {
    btnRef.current.setAttribute("disabled", "disabled");
    values.reply = "";
    Axios({
      method: "post",
      url: `${apiUrl}/api/enquiry/userEnquiry`,
      data: values,
    })
      .then((res) => {
        btnRef.current.removeAttribute("disabled");

        setError(res.data.message);
      })
      .catch((res) => {
        btnRef.current.removeAttribute("disabled");

        setError(res.message);
      });

    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }
  };

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        Make Enquiry
      </Button>

      <Modal
        title="Make Enquiry"
        centered
        visible={visible}
        width={1000}
        onCancel={() => {
          setVisible(false);
        }}
        footer={<></>}
      >
        {" "}
        <Form {...layout} name="basic" onFinish={onFinish}>
          <Form.Item
            label="Subject"
            name="subject"
            rules={[{ required: true, message: "Please input subject!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: "Please input content!" }]}
          >
            <TextArea />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button ref={btnRef} type="primary" htmlType="submit">
              Submit
            </Button>
            <p style={{ color: "blue" }}>
              {error && `Server Response: ${error}`}
            </p>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default MakeEnquiry;
