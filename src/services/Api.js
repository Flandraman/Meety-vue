import axios from "redaxios";
export default () => {
  return axios.create({
    baseURL: "http://localhost:8081",
  });
};
