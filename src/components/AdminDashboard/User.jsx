import React from "react";
import queryString from "query-string";
import Axios from "axios";
import { apiUrl } from "../../config.json";

import { useEffect } from "react";
import { useState } from "react";

import { Table, Tag, Space, Button, PageHeader } from "antd";
import { Link } from "react-router-dom";
import UserBookingTable from "./UserBookingTable";
import UserVoucherTable from "./UserVoucherTable";
const { Column, ColumnGroup } = Table;
const User = ({ location }) => {
  const userId = queryString.parse(location.search);
  const [user, setUser] = useState({
    username: "",
    bookings: [],
    vouchers: [],
  });

  const getUser = async () => {
    await Axios.get(`${apiUrl}/api/user/${userId.id}`)
      .then((res) => setUser(res.data))
      .catch((res) => setUser(null));
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div style={{ margin: 20 }}>
      <PageHeader
        ghost={false}
        onBack={() => (window.location.href = "/admin/users")}
        title={`User: ${user.username}`}
      ></PageHeader>
      <UserBookingTable bookings={user.bookings} />
      <UserVoucherTable vouchers={user.vouchers} />
    </div>
  );
};

export default User;
