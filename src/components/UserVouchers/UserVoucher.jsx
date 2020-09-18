import { Row } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import VoucherCard from "./VoucherCard";
import { apiUrl } from "../../config.json";

const UserVoucher = () => {
  const [vouchers, setVouchers] = useState([]);
  const getVouchers = async () => {
    Axios.get(`${apiUrl}/api/voucher/user`).then((res) => {
      setVouchers(res.data);
    });
  };
  useEffect(() => {
    getVouchers();
  }, []);
  return (
    <>
      <h1>Vouchers:</h1>
      <Row gutter={[16, 24]}>
        {vouchers
          .filter((e) => e.valid)
          .map((voucher) => {
            return <VoucherCard voucher={voucher} />;
          })}
      </Row>
    </>
  );
};

export default UserVoucher;
