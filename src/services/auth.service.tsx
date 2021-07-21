import axios from "axios";
import { ILoginReq } from '../models/dtos/login-req.dto';

const instance = axios.create({
  baseURL: "http://localhost:1039/dashboard-api/auth",
  headers: {
    "content-type": "application/json",
    crossDomain: true,
  },
});

// eslint-disable-next-line
export default {
  login: (req: ILoginReq) =>
    instance({
      method: "POST",
      withCredentials: true,
      url: "/login",
      data: JSON.stringify(req),
      transformResponse: function (data) {
        const item = JSON.parse(data);
        return item;
      },
    }),
};
