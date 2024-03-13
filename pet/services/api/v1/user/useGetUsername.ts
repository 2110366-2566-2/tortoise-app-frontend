import { requestClient } from "@services/clients/requestClient";

async function useGetOTP(email: string) {
    try {
        const response = await requestClient.post('/api/v1/user/recoverusername', {
            email: email
        });
        return true;
    } catch (err) {
        return false;
    }
}

export default useGetOTP