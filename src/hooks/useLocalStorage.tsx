import { typeValues } from "../schemes/localStorage.type";

const useLocalStorage = () => {
  const initialValue: typeValues = []
  const getValues = (key: string) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  }

  const saveValues = (key: string, valueToStore: typeValues) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return { getValues, saveValues };
}

export default useLocalStorage