const clearLocalStorage = () => {
    localStorage.removeItem('session_id');
    localStorage.removeItem('role');
    localStorage.removeItem('user_id');
    localStorage.removeItem('username');
  };

export default function useLogout(){
    clearLocalStorage();
    return Promise.resolve();
}