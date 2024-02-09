import { AxiosRequestConfig } from 'axios';

export const requestConfig: AxiosRequestConfig = {
  timeout: 60000,
  baseURL: 'http://localhost:8080',
};

export const DEFAULT_DEV_TOKEN = 'dev-token';
