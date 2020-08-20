import http from "@/framework/apis/http.js";
import config from "@/framework/config/app.config.js";

// 用户登录
export const postLogin = (data) => http.POST(`${config.baseUrl}/api/appLogin/login`, data);

// 请求低代码渲染组件信息
export const queryPageJson = (data) => http.POST(`${config.baseUrl}/lowcode-api/page/queryPageJson`, data);

// 前端造数据接口
// export const queryPageJson = (data) => http.GET(`/mock/5f211e5d339f163501d503a6/lowcode/xlx`, data);

// POST请求
// export const POST = (url,data) => http.POST(`${config.baseUrl}/${url}`, data);
export const POST = (url, data = {}, isEnable = true) => http.POST((isEnable == true ? `${config.baseUrl}/${url}` : `${url}`), data);

// GET请求
// export const GET = (url,data) => http.GET(`${config.baseUrl}/${url}`, data);
export const GET = (url, data = {}, isEnable = true) => http.GET((isEnable == true ? `${config.baseUrl}/${url}` : `${url}`), data);
