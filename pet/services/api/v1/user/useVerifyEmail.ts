import { requestClient } from "@services/clients/requestClient";

async function useVerifyEmail(email: string) {
    try {
        const response = await requestClient.post('/api/v1/user/checkvalidemail', {
            email: email
        });
        return true;
    } catch (err) {
        return false;
    }
}

export default useVerifyEmail;