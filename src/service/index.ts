import Request from "./request";
import {CommonResponse, CommonRequestConfig} from "./types";
// 统一GET请求使用Data传参方式（可选）

// 默认拦截器
const request = new Request({
    baseURL: process.env.BASE_URL,
    timeout: 1000 * 60 * 5,

    // 注入的拦截器实例
    interceptors: {
        // 请求拦截器
        requestInterceptors: config => {
            console.log('实例请求拦截器')
            return config
        },
        // 响应拦截器
        responseInterceptors: result => {
            console.log('实例响应拦截器')
            return result
        },
    },
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {CommonRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
export const commonRequest = <D, T = any>(config: CommonRequestConfig<D>) => {
    const {method = 'GET'} = config
    if (method === 'get' || method === 'GET') {
        config.params = config.data
    }
    return request.request<CommonResponse<T>>(config)
}

// 取消请求
export const cancelRequest = (url: string | string[]) => {
    return request.cancelRequest(url)
}
// 取消全部请求
export const cancelAllRequest = () => {
    return request.cancelAllRequest()
}

export default commonRequest;
