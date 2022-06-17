import React from "react";
import "./Select.css";

export const Select = ({ options = [], handleChange }) => {
  return (
    <select
      className="select"
      onChange={(event) => handleChange(event.target.value)}
    >
      {options.map(({ optionValue, label, id }) => (
        <option key={id} value={optionValue}>
          {label}
        </option>
      ))}
    </select>
  );
};
