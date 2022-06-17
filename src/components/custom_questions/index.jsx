import { UseFaq } from "../../utils/contexts/faqContext";
import React, { useState, useEffect } from "react";
import { Button } from "../../shared";
import "./custom_questions.css";

const CustomQuestions = () => {
  const { customQuestions, onSubmit } = UseFaq();
  useEffect(() => {
    const previousUserQuestions = JSON.parse(
      localStorage.getItem("customQuestions")
    );
    if (previousUserQuestions) onSubmit(previousUserQuestions);
    return () => console.log(1);
  }, []);
  return (
    <ul>
      {customQuestions.map((el) => (
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

export default CustomQuestions;
