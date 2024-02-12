export interface IPetProfile {
    id: string
    name: string
    price: number
    category: string
    media: string
    seller_id: string
    seller_name: string
    seller_surname: string
}

export interface IPetDetail {
    id: string
    name: string
    age: number
    birth: string
    price: number
    is_sold: boolean
    description: string
    weight: number
    sex: string
    species: string
    category: string
    behavior: string
    media: string
    medical_record: MedicalRecord[]
    seller_id: string
}

export interface IPetQueryParams{
    petId: string
}
  
export interface MedicalRecord {
    medical_id: string
    medical_date: string
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