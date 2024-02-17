import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { IPetUpdateParams } from './type';
import { requestClient } from '../../../clients/requestClient';
import { IMutationHook, IResponseData, IAxiosResponse } from '../../models';

export const useUpdatePet = ({
  onSuccess,
  onError,
  options,
}: IMutationHook<IResponseData<unknown>, IPetUpdateParams>) => {
  return useMutation({
    mutationKey: ['useUpdatePet'],
    mutationFn: async (params: IPetUpdateParams) => {
        const {petId, payload} = params
      try {
        const response: IAxiosResponse = await requestClient.put(`api/v1/pets/${petId}`, payload);
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