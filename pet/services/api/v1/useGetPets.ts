import axios from 'axios';
import { requestClient } from '../../clients/requestClient';
import { IPetProfile } from './type';

export async function useGetPets() {
    try {
        const { data } = await requestClient.get('/api/v1/pets');
        if (!data.result.data) {
            return data.result as IPetProfile[];
        }
        return data.result.data;
    } catch (err) {
        return [];
    }
}
