class LocalStorage {
  get(key: string) {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }

  set(key: string, value: object | string | number | boolean) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export const useLocalStorage = () => {
  return new LocalStorage();
};
