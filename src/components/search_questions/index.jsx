import React, { useState } from "react";
import { Button, Input } from "../../shared";
import FoundQuestions from "../found_questions";
import "./search_questions.css";

const SearchQuestions = () => {
  const [isResemblance, SetIsresemblance] = useState("");

  const Resemblance = () => {
    FoundQuestions.variant.toLoverCase().includes(isResemblance);
    return FoundQuestions;
  };

  const OpenResemblance = () => {
    const [isResemblanceOpen, setResemblanceOpen] = useState(false);

    const onResemblanceClick = () => {
      setResemblanceOpen(!isResemblanceOpen);
    };

    return (
      <div className="search-questions">
        <Input
          variant="searchQuestionsImput"
          text="Find a question"
          onChange={(event) => SetIsresemblance(event.target.value)}
        />
        <Button
          label="Search"
          variant="blueBackground"
          click={onResemblanceClick}
        />
        <FoundQuestions questions={[]} />
      </div>
    );
  };
};
export default SearchQuestions;
