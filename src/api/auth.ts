import httpRequest, { ResponseData } from "./request";
import { AxiosPromise } from "axios";

export const login = (
  phone: string,
  pwd: string
): AxiosPromise<ResponseData> => {
  return httpRequest.request({
    method: "post",
    url: "",
    data: { phone, pwd }
  });
};

export const register = (
  phone: string,
  pwd: string,
  name: string
): AxiosPromise<ResponseData> => {
  return httpRequest.request({
    method: "post",
    url: "",
    data: { phone, pwd, name }
  });
};
