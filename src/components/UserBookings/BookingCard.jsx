import { Card, Col } from "antd";
import React from "react";
import { CalendarTwoTone } from "@ant-design/icons";

const BookingCard = () => {
  return (
    <Col span={4}>
      <Card
        title={
          <>
            <CalendarTwoTone />
            Card title
          </>
        }
        bordered={true}
        size="small"
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Col>
  );
};

export default BookingCard;
