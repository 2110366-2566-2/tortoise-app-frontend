import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IUserUpdateParams } from './type';
import { requestClient } from '../../../clients/requestClient';
import { IMutationHook, IResponseData, IAxiosResponse } from '../../models';

export const useUpdateUserProfile = ({
    onSuccess,
    onError,
    options,
}: IMutationHook<IResponseData<unknown>, IUserUpdateParams>) => {
    return useMutation({
        mutationKey: ['useUpdateUser'],
        mutationFn: async (params: IUserUpdateParams) => {
            const { user_id, payload } = params;
            try {
                const response: IAxiosResponse = await requestClient.put(`api/v1/user/${user_id}`, payload);
                if (response.data.message !== 'success') {
                    throw response.data.result.message as AxiosError;
                }
                return response.data.result.message;
            } catch (err) {
                throw err as AxiosError;
            }
        },
        onSuccess: onSuccess,
        onError: onError,
        ...options,
    });
};
