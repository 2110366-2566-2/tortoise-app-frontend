import { authClient } from "../../services/clients"
import { LoginInfo } from "./type"

const setSessionData = async (sessionId: string) => {
    try {
      localStorage.setItem('session_id', sessionId);
  
      const sessionDataRes = await authClient.post('/token/get-session-data', {
        session_id: sessionId,
      });
      const sessionData = sessionDataRes?.data?.data;
      const { identity } = sessionData;
      localStorage.setItem('email', identity.email);
      localStorage.setItem('full_name', `${identity.first_name} ${identity.last_name}`);
      localStorage.setItem('identity', JSON.stringify(identity));
      localStorage.setItem(
        'user_permissions',
        JSON.stringify({
          roles: sessionData.role,
          render_permissions: sessionData.render_permission,
          permissions: sessionData.permission,
        }),
      );
    } catch (err) {
      throw err;
    }
  };

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