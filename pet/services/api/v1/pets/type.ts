export interface IPetProfile {
    pet_id: string
    name: string
    price: number
    type: string
    media: string
    seller_id: string
    seller_name: string
    seller_surname: string
}
  
export interface MedicalRecord {
    medical_id: string
    date: string
    description: string
}

export interface PetSearchParams{
    search: string
    filter: string
}

export interface Pagination {
    total: number;
    limit: number;
    page: number;
    has_more: boolean;
  }  