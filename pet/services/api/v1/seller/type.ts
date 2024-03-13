export interface IBankAccountInfo {
    bank_name: string;
    bank_account_name: string;
    bank_account_number: string;
}

export interface IBankAccountCreateParams {
    seller_id: string;
    payload: IBankAccountInfo;
}

export interface ISellerQueryParams {
    seller_id: string;
}
