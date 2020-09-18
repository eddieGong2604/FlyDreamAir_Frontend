const { default: _default } = require("antd/lib/time-picker");
const { default: Axios } = require("axios");

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
};
