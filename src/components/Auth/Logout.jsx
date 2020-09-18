import Axios from "axios";
import React, { useEffect } from "react";
import httpService from "../../services/httpService";
import { apiUrl } from "../../config.json";

const Logout = () => {
  const logOut = async () => {
    await Axios.post(`${apiUrl}/api/auth/logout`).then(() => {
      window.localStorage.removeItem("isLoggedIn");
      window.location = "/";
    });
  };
  useEffect(() => {
    logOut();
  });

  return null;
};

export default Logout;
