import httpRequest from "./request";
import { AxiosPromise } from "axios";

export const login = (username: string, password: string): AxiosPromise => {
  return httpRequest.request({
    method: "post",
    url: "/account/u/login/",
    data: { username, password }
  });
};

export const register = (
  username: string,
  password: string,
  nickname: string
): AxiosPromise => {
  return httpRequest.request({
    method: "post",
    url: "/account/u/register/",
    data: { username, password, nickname }
  });
};
