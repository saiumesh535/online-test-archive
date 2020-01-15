import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = `http://localhost:8080`;

axios.interceptors.request.use((config) => {
    return {
        ...config,
        baseURL: BASE_URL
    }
});

export const postAPI = <T, R>(url: string, body: T, config?: AxiosRequestConfig): Promise<R> => {
    return axios.post(url, body, config || {}).then((resp) => resp.data);
};

export const getAPI = <R>(url: string, config?:AxiosRequestConfig): Promise<R> => {
    return axios.get(url, config || {}).then((resp) => resp.data);
};
