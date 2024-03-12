export const getLocalStorageValue = async (key: string, initialState?: any) => {
    try {
        if (typeof window !== 'undefined') {
            const storedValue = await localStorage.getItem(key);
            return storedValue ? storedValue : initialState;
        }
    } catch (err) {
        console.error(err);
    }
};

export const setLocalStorageValue = async (key: string, initialState?: any) => {
    try {
        if (typeof window !== 'undefined') {
            await localStorage.setItem(key, initialState);
        }
    } catch (err) {
        console.error(err);
    }
};
