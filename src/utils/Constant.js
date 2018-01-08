/**
 * 常量 和 全局函数
 * @author 王伟鑫
 * @email wangweixin@pasq.com
 * @date 2018年1月6日
 */
import axios from 'axios'
// 获取域名中的location
// const LOCALHOST = window.location.host;
const LOCALHOST = "localhost";
// 根路径
const BASE_URL = "";
// 请求路径
const BASE_API = "http://" + LOCALHOST + BASE_URL;
// localStorage 中用来存储token的key值
const TOKEN_KEY = "VUE-TOKEN";
// 获取 localStorage 中 的 token
const GET_TOKEN = function () {
    return localStorage.getItem(TOKEN_KEY)
}
// 设置 localStorage 中 的 token
const SET_TOKEN = function (token) {
    localStorage.setItem(TOKEN_KEY, token)
}
// 移除 localStorage 中 的 token
const REMOVE_TOKEN = function () {
    localStorage.removeItem(TOKEN_KEY)
}
// 获取登录用户的基本信息
const GET_USERINFO = function () {
}

export {
  BASE_API,
  GET_TOKEN,
  SET_TOKEN,
  REMOVE_TOKEN,
  GET_USERINFO
}
