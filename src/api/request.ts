import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosPromise,
  AxiosResponse
} from "axios";
import { TokenModule } from "@/store/modules/token";

axios.defaults.withCredentials = true; // 让ajax携带cookie

const apiBaseUrl = "http://27y55y7329.zicp.vip";

class HttpRequest {
  constructor(public baseUrl: string = apiBaseUrl) {
    this.baseUrl = baseUrl;
  }

  public request(options: AxiosRequestConfig): AxiosPromise {
    const instance: AxiosInstance = axios.create();
    options = this.mergeConfig(options);
    this.interceptors(instance, options.url);
    return instance(options);
  }

  private interceptors(instance: AxiosInstance, url?: string) {
    // 请求拦截
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        config.headers["x-requested-with"] = "XMLHttpRequest";
        if (TokenModule.usertoken) {
          config.headers["Authorization"] = "Token " + TokenModule.usertoken;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    // 响应拦截
    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res;
      },
      error => Promise.reject(error)
    );
  }

  private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig {
    return Object.assign({ baseURL: this.baseUrl }, options);
  }
}

export default new HttpRequest();
