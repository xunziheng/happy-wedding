import axios from "axios";
import qs from "qs";

const BASE_URL = 'http://localhost:3000/api'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 180000, // 超时时间
  headers: {
    "Content-Type": "application/json",
  },
});

// 通用get请求
export function get(url, params = {}) {
  return instance.request({
    url,
    method: "GET",
    params,
  });
}

// post 请求。 application/json
export function post(url, data = {}) {
  return instance.request({
    url,
    method: "POST",
    data,
  });
}

// post 请求。 普通表单请求 'application/x-www-form-urlencoded'
export function form(url, data) {
  return instance.request({
    method: "POST",
    url,
    data: qs.stringify(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

// post 请求。 文件上传 "multipart/form-data";
export function formData(url, data) {
  return instance.request({
    method: "POST",
    url,
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}