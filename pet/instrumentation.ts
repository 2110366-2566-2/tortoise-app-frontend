import { makeEnvPublic } from 'next-runtime-env';

export function register() {
  // Here you can define all the environment variables that should be exposed to
  // the client.
  makeEnvPublic([
    'BASE_URL',
    'FILE_BUCKET_NAME',
    'API_PREFIX',
    'FILE_SERVICE_URL',
    'AUTH_URL',
  ]);
}
