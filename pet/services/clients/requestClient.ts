import axios from 'axios';
import { requestConfig, DEFAULT_DEV_TOKEN } from './config';
import { env } from 'next-runtime-env';
import { getLocalStorageValue } from '../../core/utils';

const RequestClient = axios.create({
  ...requestConfig,
});

RequestClient.interceptors.request.use(async (config) => {

  const sessionId = await getLocalStorageValue('session_id');
  const token = sessionId ?? DEFAULT_DEV_TOKEN;

  if (!token || token.trim() === '') {
    const controller = new AbortController();
    config.signal = controller.signal;
    controller.abort('sessionId is null or empty.');
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

RequestClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
    } else {
      throw error;
    }
  },

);

export { RequestClient as requestClient };
