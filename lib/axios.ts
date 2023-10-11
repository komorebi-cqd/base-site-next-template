import axios from "axios";
import { getSession } from "next-auth/react";
import toast from "react-hot-toast";

type RequestMethod = "post" | "get" | "put" | "delete";

let baseURL: string | undefined;
if (process.env.NODE_ENV === "production") {
  baseURL = "https://cabinapi.test.moonshotsz.com/api";
} else {
  baseURL = "https://cabinapi.test.moonshotsz.com/api";
}

export const request = axios.create({
  baseURL,
//   withCredentials: true, //证书
  headers: { "Content-Type": "application/json;charset=UTF-8" },
  timeout: 10000,
});

// 请求拦截`
request.interceptors.request.use(async (config) => {
  const session = await getSession();

  if (session) {
    config.headers[session.tokenHead] = session.token;
  }

  return config;
});

// 响应拦截
request.interceptors.response.use(
  (response) => {
    const { data, status } = response;
    console.log(data, status,"-1--1-");
    
    if (data.error && typeof window !== undefined) {
      toast.error("请求错误");
      return Promise.reject(data.error);
    }
    return response;
  },
  async (error) => {
    const { response } = error;

    if (response.data.error && typeof window !== undefined) {
      toast.error("请求错误");

      return Promise.reject(response.data.error);
    }

    return error;
  }
);

export const fetcher = (url: string, method: RequestMethod, params = {}) => {
  console.log(url, params, method, "---fetcher");
  return new Promise((resolve, reject) => {
    request[method](url, {
      params,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default axios;
