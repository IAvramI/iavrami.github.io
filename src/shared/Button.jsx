import React from "react";
import "./Button.css";

const variants = [
  "default",
  "blueColor",
  "blueBackground",
  "search",
  "question",
  "section",
];

export const Button = React.memo(
  ({ variant = "default", label = "", click }) => {
    if (!variants.includes(variant)) return <h1>YOU FUCKED UP</h1>;
    console.log(1);
    return (
      <button className={variant} onClick={click}>
        {label}
      </button>
    );
  }
);
