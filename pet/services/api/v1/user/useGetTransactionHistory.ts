type Transaction = {
    seller_name: string;
    price: number;
    pet_name: string;
    timestamp: {
        date: string;
        time: string;
    };
    status: string;
    payment_method: string;
};

type TransactionResponse = {
    role: number;
    data: Transaction[];
    loading: boolean;
    error: any;
};

function useGetTransactionHistory(): Promise<TransactionResponse> {
    // Mock data
    const mockData = {
        role: 1,
        data: [
            {
                seller_name: 'John Doe',
                price: 1000,
                pet_name: 'Fluffy',
                timestamp: {
                    date: '2021-10-10',
                    time: '10:00'
                },
                status: 'pending',
                payment_method: 'paypal'
            },
            {
                seller_name: 'Jane Doe',
                price: 500,
                pet_name: 'Fido',
                timestamp: {
                    date: '2021-10-11',
                    time: '11:00'
                },
                status: 'pending',
                payment_method: 'creditcard'
            },
            {
                seller_name: 'John Doe',
                price: 1000,
                pet_name: 'Fluffy',
                timestamp: {
                    date: '2021-10-12',
                    time: '12:00'
                },
                status: 'paid',
                payment_method: 'paypal'
            },
            {
                seller_name: 'Jane Doe',
                price: 500,
                pet_name: 'Fido',
                timestamp: {
                    date: '2021-10-13',
                    time: '13:00'
                },
                status: 'paid',
                payment_method: 'creditcard'
            },
            {
                seller_name: 'John Doe',
                price: 1000,
                pet_name: 'Fluffy',
                timestamp: {
                    date: '2021-10-14',
                    time: '14:00'
                },
                status: 'paid',
                payment_method: 'paypal'
            },
            {
                seller_name: 'Jane Doe',
                price: 500,
                pet_name: 'Fido',
                timestamp: {
                    date: '2021-10-15',
                    time: '15:00'
                },
                status: 'paid',
                payment_method: 'creditcard'
            },
            {
                seller_name: 'John Doe',
                price: 1000,
                pet_name: 'Fluffy',
                timestamp: {
                    date: '2021-10-16',
                    time: '16:00'
                },
                status: 'paid',
                payment_method: 'paypal'
            },
            {
                seller_name: 'Jane Doe',
                price: 500,
                pet_name: 'Fido',
                timestamp: {
                    date: '2021-10-17',
                    time: '17:00'
                },
                status: 'paid',
                payment_method: 'creditcard'
            }
        ],
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                role: mockData.role,
                data: mockData.data,
                loading: false,
                error: null
            });
        }, 1500);
    });
}

export default useGetTransactionHistory;
