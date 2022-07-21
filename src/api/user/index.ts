import commonRequest from "../../service";

interface IReq {
    userName: string,
    password: string
}

interface IRes {
    token: string,
    userName: string,
    userId: string
}

const api = {
    login: "/api/user/login",
    register: "/api/user/register",
    getUserInfo: "/api/user/getUserInfo",
    sendCode: "/api/user/sendCode",
    getAllUsers: "/api/user/getAllUsers",
};

export const login = (data) => {
    return commonRequest<IReq, IRes>({
        url: api.login,
        method: "post",
        data,
        // 需要进行的额外处理
        interceptors: {
            requestInterceptors: (config) => {
                console.log('注入拦截器实例');
                return config;
            },
        }
    });
}
