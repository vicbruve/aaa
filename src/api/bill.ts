import httpRequest from "./request";
import { AxiosPromise } from "axios";

export interface BillInfo {
  money: number;
  category: number;
  remark: string;
  date?: string;
  username?: string;
  account: string;
  userid: string;
}

export const getBill = (userid: string, date: string, category: number) => {
  return httpRequest.request({
    method: "get",
    url: `account/u/${userid}/bill/${date}/${category}/`
  });
};

export const postBill = (
  accountname: string,
  money: number,
  remark: string,
  userid: string,
  date: string,
  category: number
) => {
  return httpRequest.request({
    method: "post",
    url: `account/u/${userid}/bill/${date}/${category}/`,
    data: { accountname, money, remark }
  });
};
