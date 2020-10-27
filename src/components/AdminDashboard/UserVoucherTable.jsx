import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { notification } from "antd";
import { useState } from "react";
import { apiUrl } from "../../config.json";
import { Table, Tag, Space, Button } from "antd";
const { Column, ColumnGroup } = Table;

const UserVoucherTable = ({ vouchers }) => {
  const [userVouchers, setUserVouchers] = useState([]);

  useEffect(() => {
    setUserVouchers(vouchers);
  }, [userVouchers, vouchers]);

  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: type,
      description: message,
    });
  };

  const update = async (id) => {
    let voucher = userVouchers.filter((e) => e.voucherId === id)[0];
    let index = userVouchers.indexOf(voucher);
    await Axios.post(`${apiUrl}/api/voucher/valid/${id}`)
      .then(() => {
        let a = [...userVouchers];
        a[index].valid = !a[index].valid;
        setUserVouchers(a);
        openNotificationWithIcon("success", "Update sucessful!");
      })
      .catch((e) => {
        openNotificationWithIcon("error", "update unsucessful!");
      });
  };

  return (
    <div>
      <h1>Vouchers: </h1>
      <Table dataSource={userVouchers}>
        <Column
          title="Voucher Code"
          dataIndex="voucherCode"
          key="voucherCode"
        />
        <Column
          title="Voucher Discount"
          key="discount"
          render={(text, record) => <>{record.discount * 100}%</>}
        />
        <Column
          title="Validity"
          key="valid"
          render={(text, record) => <>{record.valid ? "Unused" : "Used"}</>}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Button onClick={() => update(record.voucherId)}>Update</Button>
          )}
        />
      </Table>
    </div>
  );
};

export default UserVoucherTable;
