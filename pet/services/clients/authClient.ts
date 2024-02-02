import axios from 'axios';

import { requestConfig } from './config';
import { env } from 'next-runtime-env';

const authClient = axios.create({
  ...requestConfig,
  baseURL: env('NEXT_PUBLIC_AUTH_URL'),
  validateStatus: () => true,
});

authClient.interceptors.request.use((config) => {
  return config;
});

export { authClient };
