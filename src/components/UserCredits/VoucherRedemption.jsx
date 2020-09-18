import React, { useRef, useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import Axios from "axios";
import "./UserCredits.css";
import { apiUrl } from "../../config.json";

const VoucherRedemption = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState({});
  let btnRef = useRef();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setMessage("");
    window.location = "/dashboard/frequent_flyer/credits";
    setVisible(false);
  };

  const onFinish = (values) => {
    Axios({
      method: "post",
      url: `${apiUrl}/api/voucher/me`,
      data: {
        points: Number.parseFloat(values.points),
      },
    })
      .then((res) => {
        setMessage(res.data);
        btnRef.current.removeAttribute("disabled");
      })
      .catch((res) => {
        console.log(res.message);
      });

    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Redeem Voucher
      </Button>

      <Modal
        title="Voucher"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            name="points"
            rules={[
              {
                required: true,
                message:
                  "Please input the amount of points you want to redeem!",
              },
            ]}
            label="Enter amount of frequent flyer points:"
          >
            <Input placeholder="frequent flyer points" />
          </Form.Item>
          <Form.Item>
            <Button ref={btnRef} type="primary" htmlType="submit">
              Redeem
            </Button>
            <p className={message.success ? "text-blue" : "text-red"}>
              {message.message}
            </p>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default VoucherRedemption;
