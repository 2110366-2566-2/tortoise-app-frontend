export interface RegistrationInfo {
    username: string
    password : string
    email: string
    role: number
}

export interface LoginInfo {
    username: string,
    password: string
}

export interface ISessionData {
    role: string
    userID: string
    username: string
}