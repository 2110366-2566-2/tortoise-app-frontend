import { requestClient } from "@services/clients/requestClient";
import { getLocalStorageValue } from "@core/utils";
import { DEFAULT_DEV_TOKEN } from "@services/clients/config";
import jwt from 'jsonwebtoken'
import useConfirmPayment from "./useConfirmPayment";

async function useCreatePayment(petFullDetail: any, payment_method: any) {
    try {
        const sessionId = await getLocalStorageValue('session_id');
        const token = sessionId ?? DEFAULT_DEV_TOKEN;

        const decoded = jwt.decode(token) as jwt.JwtPayload;

        const userID = decoded ? decoded.userID.toString() : "";

        const headers = {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        };

        const body = {
            'price': petFullDetail.price,
            'seller_id': petFullDetail.seller_id,
            'buyer_id': userID,
            'pet_id': petFullDetail.id,
        }

        const res = await requestClient.post('/api/v1/payment/create', body, { headers });

        const payment_id = res.data.payment_id;
        const transaction_id = res.data.transaction_id;
        await useConfirmPayment(payment_id, transaction_id, payment_method);
        
        return true;
    } catch (error) {
        return false;
    }
}

export default useCreatePayment;