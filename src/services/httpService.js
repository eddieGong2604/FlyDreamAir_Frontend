import Axios from "axios";

const { default: _default } = require("antd/lib/time-picker");

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
};
