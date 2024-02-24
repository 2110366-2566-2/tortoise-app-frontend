const clearLocalStorage = () => {
    localStorage.removeItem('session_id');
    localStorage.removeItem('email');
    localStorage.removeItem('full_name');
    localStorage.removeItem('identity');
    localStorage.removeItem('user_permissions');
    localStorage.removeItem('is_aim_login');
  };
  

export default function useLogout(){
    clearLocalStorage();
    return Promise.resolve();
}