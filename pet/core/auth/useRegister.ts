import { useQuery, useMutation } from "@tanstack/react-query";
import { RegistrationInfo } from "./type";

export default async function useRegister(data: RegistrationInfo) {
    const response = await fetch('http://localhost:8080/api/v1/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    return await response.json()

}