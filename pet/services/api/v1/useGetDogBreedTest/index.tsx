import axios from 'axios';
import { requestClient } from '../../../clients/requestClient';

type DogBreed = {
    breed: string;
};

type IGetDogBreedResponse = {
    data: DogBreed[];
};

export async function useGetDogBreed() {
    try {
        const { data } = await requestClient.get(`https://dog.ceo/api/breeds/list/all`);
        if (!data.result.data) {
            return data.result as IGetDogBreedResponse;
        }
        return data.result.data;
    } catch (err) {
        return [];
    }
}
