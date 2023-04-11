import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.SERVER_URL}/api/v1`,
  withCredentials: false,
  headers: {
    authorization: `Bearer {}`,
  },
});

export default instance;
