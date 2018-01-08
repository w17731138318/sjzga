import axios from 'axios'
import qs from 'qs'
import { BASE_API, GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from 'utils/Constant'
// 响应时间
axios.defaults.timeout = 5000;
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 配置接口地址
axios.defaults.baseURL = BASE_API;
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if(GET_TOKEN()==null){
    }
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    //对响应数据做些事
    if (res.data.code!=0) {
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    _.toast("网络异常", 'fail');
    return Promise.reject(error);
});
// 返回一个Promise(发送post请求)
const fetch = function (url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export { fetch} 