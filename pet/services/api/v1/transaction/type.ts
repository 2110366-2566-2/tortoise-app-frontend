export interface Transaction {
    seller_name: string;
    price: number;
    pet_name: string;
    timestamp: {
        date: string;
        time: string;
    };
    status: string;
    payment_method: string;
};

export interface TransactionResponse {
    role: number;
    data: Transaction[];
    loading: boolean;
    error: string | null;
}