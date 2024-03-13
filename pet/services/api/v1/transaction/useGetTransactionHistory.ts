import { useEffect, useState } from "react";
import { Transaction, TransactionResponse } from "./type";
import { requestClient } from "@services/clients/requestClient";
import { getLocalStorageValue } from "@core/utils";
import { DEFAULT_DEV_TOKEN } from "@services/clients/config";

async function useGetTransactionHistory(): Promise<TransactionResponse> {
    try {
        const sessionId = await getLocalStorageValue('session_id');
        const token = sessionId ?? DEFAULT_DEV_TOKEN;
        const headers = {
            'Authorization': 'Bearer ' + token,
        };
        const response = await requestClient.get('/api/v1/transactions/', { headers });
        const data: Transaction[] = response.data.transactions;
        const role = response.data.role;
        return {
            role: role,
            data: data,
            loading: false,
            error: null
        };
    } catch (error) {
        return {
            role: "",
            data: [],
            loading: false,
            error: "error"
        };
    }
}

export default useGetTransactionHistory;
