import axios, {AxiosResponse} from "axios";
import {config} from "../environments";

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

axios.defaults.baseURL = config;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(config => {
    const token = '12312';
    if (token)
        config.headers!.Authorization = `Bearer ${token}`
    return config;
})

const responseBody = (response: AxiosResponse) => response.data;
axios.interceptors.response.use(async response => {
    if (process.env.NODE_ENV === 'development') await sleep();
    return response;
});

const requests = {
    get: (url: string, params?: URLSearchParams) => axios.get(url, {params}).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
}

const Account = {
    login: (login:string,password:string) => requests.get(`/users/token?name=${login}&password=${password}`),
}

const agent = {
    Account,
}

export default agent;