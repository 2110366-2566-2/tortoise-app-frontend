export interface IUserDetail {
    _id: any;
    username: string;
    first_name: string;
    last_name: string;
    gender: string;
    phoneNumber: string;
    image: string;
    address: Address;
}

export interface Address {
    houseNumber: string,
    building: string,
    street: string,
    district: string,
    subdistrict: string,
    province: string,
    postalCode: string,
}

export interface IChangePassword {
    o_password: string,
    password: string
}