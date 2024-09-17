import { createContext, useContext, useEffect, useState } from "react";
import apiFetch from "../services/apiFetch";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        let questions = await apiFetch("questions");
        questions = questions.sort((a, b) => a.position - b.position);
        setQuestions(questions);
        setIsLoading(false);
      }catch(error) {
        console.error(error);
        setError(error);

        setIsLoading(false);
      }
    }

    fetch();
  }, []);

  return (
    <DataContext.Provider
      value={{
        isLoading,
        questions,
        error,
        setError
      }}
    >
      { children }
    </DataContext.Provider>
  );
}

const useData = () => useContext(DataContext);

export { DataProvider, useData };
