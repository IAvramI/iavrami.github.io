import React, { useState } from "react";
import { Button } from "../../shared";

const FoundQuestions = ({ questions }) => {
  return (
    <ul>
      {questions.map((el) => (
        <Section key={el.id} element={el} />
      ))}
    </ul>
  );
};

const Section = ({ element }) => {
  const [isSectionOpen, setSectionOpen] = useState(false);

  const onSectionClick = () => {
    setSectionOpen(!isSectionOpen);
  };

  return (
    <li>
      <Button
        label={element.section}
        variant="section"
        click={onSectionClick}
      />
      {isSectionOpen ? (
        <span className="arrow" onClick={onSectionClick}>
          ▲
        </span>
      ) : (
        <span className="arrow" onClick={onSectionClick}>
          ▼
        </span>
      )}

      {isSectionOpen && (
        <ul>
          {element.questions.map((subel) => (
            <Question key={subel.id} object={subel} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Question = ({ object }) => {
  const [isQuestionOpen, setQuestionOpen] = useState(false);

  const onQuestionClick = () => {
    setQuestionOpen(!isQuestionOpen);
  };

  return (
    <li>
      <Button
        label={object.question}
        variant="question"
        click={onQuestionClick}
      />

      {isQuestionOpen ? (
        <span className="arrow">▲</span>
      ) : (
        <span className="arrow">▼</span>
      )}

      {isQuestionOpen && <div className="answer">?</div>}
    </li>
  );
};

export default FoundQuestions;
