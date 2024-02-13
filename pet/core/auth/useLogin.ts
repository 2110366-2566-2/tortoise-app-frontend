import { LoginInfo } from "./type"

export default async function useLogin(data: LoginInfo) {
    
    const response = await fetch("http://localhost:8080/api/v1/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: data.username,
            password: data.password
        })
    })     
    
    return await response.json()

}