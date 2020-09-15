import React, { useEffect, useState } from "react";
import { List, Avatar, Button } from "antd";
import { ProfileTwoTone } from "@ant-design/icons";
import VoucherRedemption from "./VoucherRedemption";

const UserCredits = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({
      passportNumber: "passportNumber",
      username: "username",
      name: "name",
      ffpoints: 100,
      statusPoints: 100,
      status: "status",
    });
  }, []);
  return (
    <>
      <h1>Your Frequent Flyer Points : {user.ffpoints}</h1>
      <h1>Your Status Points : {user.ffpoints}</h1>
      <h1>Your Current Status: {user.status}</h1>
      <VoucherRedemption />
    </>
  );
};

export default UserCredits;
