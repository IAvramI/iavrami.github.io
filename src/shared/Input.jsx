import React, { forwardRef } from "react";
import "./Input.css";

export const Input = forwardRef(
  ({ text = "", focus = () => {}, handleChange, variant }, ref) => {
    return (
      <input
        ref={ref}
        className={variant}
        type="text"
        placeholder={text}
        onFocus={() => focus(true)}
        onBlur={() => focus(false)}
        onChange={(event) => handleChange(event.target.value)}
      />
    );
  }
);
