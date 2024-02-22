import { authClient } from "../../services/clients"
import { LoginInfo } from "./type"

export default async function useLogin({username, password}: LoginInfo) {
    
    try{
        const response = await authClient.post('/api/v1/user/login', {
            username,
            password,
        })
        if (response.data.error || !response.data.token) throw new Error(response.data.error);
        const sessionId = response?.data?.token
        localStorage.setItem('session_id', sessionId)
        return Promise.resolve()
    } catch(err){
        return err
    }
}