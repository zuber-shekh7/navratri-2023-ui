const useLocalStorage = () => {
  const setItem = (key, value) => {
    localStorage.setItem(key, value);
  };

  const getItem = (key) => {
    return localStorage.getItem(key);
  };

  const clear = () => {
    localStorage.clear();
  };

  return { setItem, getItem, clear };
};

export default useLocalStorage;
