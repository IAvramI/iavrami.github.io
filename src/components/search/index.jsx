import React, { useState, useRef, useCallback } from "react";
import { Input, Button } from "../../shared";
import { UseSearch } from "../../utils/contexts/searchContext";
import "./search.css";

const Search = () => {
  const [isFocus, setFocus] = useState(false);
  const { onChange } = UseSearch();
  const inputRef = useRef(null);

  const focusRef = useRef(false);

  const inputFocus = useCallback(() => {
    console.log(focusRef.current);
    if (focusRef.current === false) {
      inputRef.current.focus();
      focusRef.current = true;
    } else focusRef.current = false;
  }, []);

  return (
    <div className={`searchBox ${isFocus ? "focust" : "unfocust"}`}>
      <Input
        focus={setFocus}
        text="You website URL"
        handleChange={onChange}
        variant="homeImput"
        ref={inputRef}
      />
      <Button label="Get Started" variant="search" click={inputFocus} />
    </div>
  );
};

export default Search;
