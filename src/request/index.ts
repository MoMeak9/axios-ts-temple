import {request} from "./axios";
import {CommonResponse, CommonRequestConfig} from "./types";
// 统一GET请求使用Data传参方式（可选）
const commonRequest = <D, T = any>(config: CommonRequestConfig<D>) => {
    const {method = 'GET'} = config
    if (method === 'get' || method === 'GET') {
        config.params = config.data
    }
    return request.request<CommonResponse<T>>(config)
}

export default commonRequest;
