import { UseQueryResult, useQuery, useQueryClient } from '@tanstack/react-query';
import { requestClient } from '../../../clients/requestClient';
import { IPetProfile, PetSearchParams, Pagination } from './type';

const fetchPetList = async (queryParams?: PetSearchParams) => {
    try {
      const searchValue = queryParams?.search?.trim() ?? '';
      const response = await requestClient.get(`api/v1/pets/`);
      const data = await response.data;
      return [response.data as IPetProfile[], response.data.Pagination as Pagination];
    } catch (error) {
      throw error;
    }
  };
  

export default function useGetPets(
    queryParams: PetSearchParams,
  queryOptions?: any,
): UseQueryResult<[IPetProfile[], Pagination]> {
  return useQuery({
    queryKey: ['pets', queryParams],
    queryFn: () => fetchPetList(queryParams),
    refetchOnMount: true,
    ...queryOptions,
  });
}
