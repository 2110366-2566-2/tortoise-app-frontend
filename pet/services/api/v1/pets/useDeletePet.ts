import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { requestClient } from '../../../clients/requestClient';
import { IPetQueryParams, IPetDetail } from './type';

export default function useDeletePet(
    queryParams: IPetQueryParams,
  queryOptions?: any,
): UseQueryResult<IPetDetail> {
  return useQuery({
    queryKey: ['pets', queryParams],
    queryFn: async () => {
    const petId = queryParams?.petId
    try {
        const response = await requestClient.delete(`api/v1/pets/${petId}`);
        const data = await response.data;
        return data as IPetDetail;
    } catch (error) {
        throw error;
    }
    },
    refetchOnMount: true,
    ...queryOptions,
  });
}