import React, { useEffect, useState } from "react";
import { List, Avatar, Button } from "antd";
import { ProfileTwoTone } from "@ant-design/icons";
import VoucherRedemption from "./VoucherRedemption";
import Axios from "axios";
import FrequentFlyerCard from "./FrequentFlyerCard";

const UserCredits = () => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    await Axios.get("/api/user/info").then((res) => setUser(res.data));
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <FrequentFlyerCard user={user} />
    </>
  );
};

export default UserCredits;
