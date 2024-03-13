import { requestClient } from "@services/clients/requestClient";

async function useCheckOTP(email: string, otp: string) {
    console.log("OTP is " + otp);
    try {
        const response = await requestClient.post('/api/v1/user/checkotp', {
            email: email,
            OTP: otp
        });
        return true;
    } catch (err) {
        return false;
    }
}

export default useCheckOTP