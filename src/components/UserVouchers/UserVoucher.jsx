import { Row } from "antd";
import React from "react";
import VoucherCard from "./VoucherCard";
const UserVoucher = () => {
  return (
    <>
      <h1>Your vouchers</h1>
      <Row justify="space-around">
        <VoucherCard />
        <VoucherCard />
        <VoucherCard />
        <VoucherCard />
      </Row>
    </>
  );
};

export default UserVoucher;
