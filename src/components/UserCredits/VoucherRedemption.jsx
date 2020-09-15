import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";

const VoucherRedemption = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
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
        <Form>
          <Form.Item label="Enter amount of frequent flyer points:">
            <Input placeholder="frequent flyer points" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Redeem
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default VoucherRedemption;
