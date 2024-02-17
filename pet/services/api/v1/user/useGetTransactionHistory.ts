function useGetTransactionHistory() {
    // Mock data
    const mockData = [
        {
            "seller_name": "John Doe",
            "price": 1000,
            "pet_name": "Buddy",
            "timestamp": {
                "date": "2021-10-01",
                "time": "12:00"
            },
            "payment_method": "CreditCard"
        },
        {
            "seller_name": "Jane Doe",
            "price": 2000,
            "pet_name": "Max",
            "timestamp": {
                "date": "2021-10-02",
                "time": "13:00"
            },
            "payment_method": "Paypal"
        },
        {
            "seller_name": "John Doe",
            "price": 1500,
            "pet_name": "Buddy",
            "timestamp": {
                "date": "2021-10-03",
                "time": "14:00"
            },
            "payment_method": "CreditCard"
        }
    ]

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: mockData,
                loading: false,
                error: null
            });
        }, 1500);
    });
}

export default useGetTransactionHistory;
