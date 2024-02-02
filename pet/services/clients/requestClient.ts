import axios from 'axios';
import { requestConfig, DEFAULT_DEV_TOKEN } from './config';
import { env } from 'next-runtime-env';
import { getLocalStorageValue } from '../../core/utils';

const RequestClient = axios.create({
  ...requestConfig,
  baseURL: env('NEXT_PUBLIC_URL'),
});

RequestClient.interceptors.request.use(async (config) => {
  const sessionId = await getLocalStorageValue('session_id');

  config.headers.Authorization = `Bearer ${sessionId ?? DEFAULT_DEV_TOKEN}`;

  return config;
});

RequestClient.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  },
);

export { RequestClient as requestClient };
