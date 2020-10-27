import { Row } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import VoucherCard from "./VoucherCard";
import { apiUrl } from "../../config.json";
import { LoadingOutlined } from "@ant-design/icons";

const UserVoucher = () => {
  const [vouchers, setVouchers] = useState([]);
  const [mess, setMess] = useState("");
  const [load, setLoad] = useState(true);
  const getVouchers = async () => {
    Axios.get(`${apiUrl}/api/voucher/user`).then((res) => {
      setVouchers(res.data);
      setLoad(false);
      if (res.data.filter((e) => e.valid).length === 0) {
        setMess(
          "No vouchers available. You can get voucher by booking flight in Flights section"
        );
      }
    });
  };
  useEffect(() => {
    getVouchers();
  }, []);
  return (
    <>
      <h1>Your vouchers:</h1>
      {load && <LoadingOutlined />}
      {mess && mess}
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
