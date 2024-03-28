import { requestClient } from "@services/clients/requestClient";
import { getLocalStorageValue } from "@core/utils";
import { DEFAULT_DEV_TOKEN } from "@services/clients/config";
import jwt from 'jsonwebtoken'

async function useConfirmPayment(payment_id: any, transaction_id: any, payment_method: any) {
    try {
        const sessionId = await getLocalStorageValue('session_id');
        const token = sessionId ?? DEFAULT_DEV_TOKEN;

        const headers = {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        };

        const body = {
            'payment_id': payment_id,
            'transaction_id': transaction_id,
            'payment_method': payment_method
        }

        const res = await requestClient.post('/api/v1/payment/confirm', body, { headers });
        if (!res.status) {
            return false;
        }
        
        return true;
    } catch (error) {
        return false;
    }
}

export default useConfirmPayment;