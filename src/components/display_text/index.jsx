import React from "react";
import { UseSearch } from "../../utils/contexts/searchContext";
import "./display_text.css";

const DisplayText = () => {
  const { value } = UseSearch();
  return <p className="p2">{value}</p>;
};

export default DisplayText;
