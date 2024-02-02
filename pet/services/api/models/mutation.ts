import { AxiosError } from 'axios';
import { UseMutationOptions } from '@tanstack/react-query';

import { ErrorResponse, IError } from './response';

export interface IMutationOptions<TData = unknown, TError = unknown, TVariables = unknown, TContext = unknown>
  extends Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'> {}

export interface IMutationHook<Response, Params> {
  mutationKey?: string | string[] | any;
  options?: IMutationOptions<Response | ErrorResponse, AxiosError<IError>>;
  onError?:
    | ((error: AxiosError<IError<any, any>, any>, variables: Params, context: unknown) => void | Promise<unknown>)
    | undefined;
  onSuccess?: (data?: Response | ErrorResponse, variables?: Params) => void;
}