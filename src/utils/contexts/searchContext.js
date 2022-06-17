import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState(null);
  return (
    <SearchContext.Provider value={[searchText, setSearchText]}>
      {children}
    </SearchContext.Provider>
  );
};

export const UseSearch = () => {
  const [searchText, setSearchText] = useContext(SearchContext);
  const handleSearch = (value) => {
    setSearchText(value);
  };
  return { value: searchText, onChange: handleSearch };
};
