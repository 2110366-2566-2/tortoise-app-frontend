export interface Transaction {
    seller_name: string;
    price: number;
    pet_detail: {
        name: string;
        age: number;
        sex: string;
        species: string;
    };
    timestamp: string;
    status: string;
    payment_method: string;
};

export interface TransactionResponse {
    role: string;
    data: Transaction[];
    loading: boolean;
    error: string | null;
}
