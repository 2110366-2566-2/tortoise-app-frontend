import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { requestClient } from '../../../clients/requestClient';
import { IPetProfile, PetSearchParams, Pagination } from './type';
import useToastUI from '../../../../core/hooks/useToastUI';

const fetchPetList = async (queryParams?: PetSearchParams) => {
  const {toastError} = useToastUI();
    try {
      const searchValue = queryParams?.search?.trim() ?? '';
      const response = await requestClient.get(`api/v1/pets/`);
      return [response.data as IPetProfile[], response.data.Pagination as Pagination];
    } catch (error) {
      toastError('Failed loading pet lists');
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
