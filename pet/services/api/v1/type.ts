export interface IPetProfile {
    _id: string
    name: string
    age: number
    price: number
    is_sold: boolean
    description: string
    weight: number
    sex: string
    species: string
    type: string
    behavior: string
    media: string
    medical_record: MedicalRecord
    seller_id: string
}
  
export interface MedicalRecord {
    medical_id: string
    date: string
    description: string
}