type ISession = {
    role: string | null;
    userID: string | null;
    username: string | null;
};

export default function useGetSession() {
    if (typeof window !== 'undefined') {
        const session: ISession = {
            role: localStorage.getItem('role') || '',
            userID: localStorage.getItem('user_id') || '',
            username: localStorage.getItem('username') || '',
        };
        return session;
    } else {
        const session: ISession = {
            role: '',
            userID: '',
            username: '',
        };
        return session;
    }
}
