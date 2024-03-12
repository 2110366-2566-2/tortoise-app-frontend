export default function useGetSession() {
    const session = {
        role: localStorage.getItem('role'),
        userID: localStorage.getItem('user_id'),
        username: localStorage.getItem('username'),
    };
    return session;
}
