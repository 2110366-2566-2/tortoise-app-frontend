

/*
export async function addPetToSeller('65c7356900dfa761aed36125' :string, petData: IPetDetail) {
    try {
      
      //const response = await axios.post(`{{url}}/api/v1/pets/seller/65c7356900dfa761aed36120`, petData);
        const response = await axios.post(`/api/v1/pets/seller/65c7356900dfa761aed36125`, petData);
        return response.data; // หรือจะ return response ตรงๆ ขึ้นอยู่กับการจัดการข้อมูลต่อไป
    } catch (error:any) {
        throw new Error('Failed to add pet: ' + error.message);
    }
}

*/

import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { requestClient } from '../../../clients/requestClient';
import { IPetDetail } from './type';
import { IMutationHook } from '../../models';
export default function useCreatePet(): UseMutationResult<IPetDetail, Error, IPetDetail> {
  const mutation = useMutation<IPetDetail, Error, IPetDetail>(
    async (newPetData: IPetDetail) => {
      try {
        const response = await requestClient.post('api/v1/pets/', newPetData);
        return response.data as IPetDetail;
      } catch (error) {
        throw (error);
      }
    },
    {
      onError: (error: any, variables: any) => {
        // Handle error here
        console.error('Mutation error:', error);
      },
      onSuccess: (data: any) => {
        // Handle success here
        console.log('Mutation success:', data);
      },
    }
  );

  return mutation;
}





