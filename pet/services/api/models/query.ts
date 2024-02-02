import { AxiosError } from 'axios';
import { UseQueryOptions, QueryKey } from '@tanstack/react-query';

import { IDefaultError, IError } from './response';

export interface IQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> extends Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'> {}

export interface IQueryHook<Response> {
  queryKey: string | string[];
  options?: IQueryOptions<Response, AxiosError<IError>>;
  errors?: {} & IDefaultError;
  onSuccess?: (data?: Response) => any;
}
