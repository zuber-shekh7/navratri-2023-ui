import useLocalStorage from "./useLocalStorage";

const useAuth = () => {
  const { getItem, clear } = useLocalStorage();

  const logout = () => {
    clear();
  };

  return {
    isAuthenticated: getItem("token"),
    token: getItem("token"),
    user: JSON.parse(getItem("user")),
    logout: logout,
  };
};

export default useAuth;
