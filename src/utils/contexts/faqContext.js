import { createContext, useContext, useState } from "react";
import { faqArray } from "../mock/faqMock";

const FaqContext = createContext();

export const FaqProvider = ({ children }) => {
  const [userQuestions, setUserQuestions] = useState([]);
  return (
    <FaqContext.Provider value={[userQuestions, setUserQuestions, faqArray]}>
      {children}
    </FaqContext.Provider>
  );
};

export const UseFaq = () => {
  const [userQuestions, setUserQuestions, faqArray] = useContext(FaqContext);
  const handleFaq = (value) => {
    setUserQuestions(value);
  };
  return {
    customQuestions: userQuestions,
    onSubmit: handleFaq,
    defaultQuestions: faqArray,
  };
};
