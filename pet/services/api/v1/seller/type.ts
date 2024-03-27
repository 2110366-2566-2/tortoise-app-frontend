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

export interface ISellerProfile {
    id: string,
    first_name: string,
    last_name: string,
    pets: string[],
    bank_account: IBankAccountInfo,
    license: string,
    status: string,
}