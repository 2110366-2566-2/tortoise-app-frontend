import { requestClient } from "@services/clients/requestClient";
import { getLocalStorageValue } from "@core/utils";
import { DEFAULT_DEV_TOKEN } from "@services/clients/config";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";
import jwt from 'jsonwebtoken'

async function useCreateReportSystem(report: string) {
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
            'reporter_id': userID,
            'description': report,
            'is_solved': false,
        }

        await requestClient.post('/api/v1/report/system', body, { headers });

        return true;
    } catch (error) {
        return false;
    }
}

export default useCreateReportSystem;