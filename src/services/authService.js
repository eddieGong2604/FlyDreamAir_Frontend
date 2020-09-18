import jwtDecode from "jwt-decode";
import { apiUrl } from "../config.json";
import httpService from "./httpService";
import Cookies from "universal-cookie";

const apiEndpoint = apiUrl;
const cookies = new Cookies();
export const login = async (credentials) => {
  await httpService.post(apiEndpoint + "/api/auth/signin", credentials);
};
export const logout = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

export const getCurrentUser = async () => {};

export const getJwt = () => {
  return Cookies.get("accessToken");
};

export default {
  login,
  logout,
  getCurrentUser,
  getJwt,
};
