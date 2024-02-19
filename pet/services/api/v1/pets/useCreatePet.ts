import { IPetDetail } from "./type";

export default async function useCreatePet(data: IPetDetail) {
    const response = await fetch(`http://localhost:8080/api/v1/pets/seller/${data.seller_id}`, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    return response.json()
}