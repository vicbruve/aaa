import httpRequest from "./request";
import { AxiosPromise } from "axios";
import { getToken, setToken } from "../utils/cookies";

export const loadCookie = () => {
  console.log(document.cookie);
  return httpRequest.request({
    method: "get",
    url: "/account/u/login/"
  });
};
