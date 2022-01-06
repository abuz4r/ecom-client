import axios from "axios";

const baseURL = "https://nameless-journey-88760.herokuapp.com/api"
  // process.env.NODE_ENV === "production"
  //   ? process.env.REACT_APP_API_URL
  //   : "/api";

const API = axios.create({
  baseURL,
  withCredentials: true,
});

API.interceptors.request.use(
  function (req) {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) req.headers["auth-token"] = token;
    return req;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default API;
