import "./questions.css";
import { UseFaq } from "../../utils/contexts/faqContext";
import React, { useState } from "react";
import { Button } from "../../shared";

const SectionsWithQuestions = () => {
  const { defaultQuestions } = UseFaq();

  return (
    <ul>
      {defaultQuestions.map((el) => (
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
        <span className="arrow">▲</span>
      ) : (
        <span className="arrow">▼</span>
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

      {isQuestionOpen && (
        <div className="answerForQuestion">{object.answer}</div>
      )}
    </li>
  );
};

export default SectionsWithQuestions;
