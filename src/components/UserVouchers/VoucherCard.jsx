import { Card, Col } from "antd";
import React from "react";
const VoucherCard = () => {
  return (
    <Col span={4}>
      <Card title="Voucher Code" bordered={true}>
        Discount :
      </Card>
    </Col>
  );
};

export default VoucherCard;
