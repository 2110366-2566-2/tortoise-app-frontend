import { AxiosResponse, AxiosError } from 'axios';

export interface IResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

export interface IAxiosResponse<T = unknown> extends AxiosResponse {
  code: number;
  message: string;
  result: IResponse<T>;
}

export interface IResponseData<T = unknown> {
  code: number;
  message: string;
  result: IResponse<T>;
}

// FIXME: ERROR interfaces
export interface IError<T = any, D = any> {
  code: ErrorCode;
  message: string;
  details: D;
  data: T;
}

export interface IDefaultError {
  onDefaultError(error: AxiosError<IError, any>): void;
}

export interface ErrorResponseData {
  message?: string;
}

export interface ErrorResponse extends AxiosResponse<ErrorResponseData> {}

export interface ITimestampResponse {
  created_at?: string;
  updated_at?: string;
  deleted_at?: string | null;
}

export enum ErrorCode {
  UnknownError = 100001,
  InvalidJSONString = 100002,
  InputValidationError = 100003,
  Unauthorized = 100004,
  NotFound = 100005,
  InvalidFieldValue = 100011,
}
