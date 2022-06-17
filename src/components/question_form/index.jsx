import React, { useState } from "react";
import { Button, Input, Select } from "../../shared";
import { UseFaq } from "../../utils/contexts/faqContext";
import "./question_form.css";

const QuestionForm = () => {
  const { customQuestions, onSubmit, defaultQuestions } = UseFaq();
  const options = defaultQuestions.map(({ section, id }) => ({
    label: section,
    value: section,
    id: id,
  }));

  const [addQuestion, setAddQuestion] = useState("");
  const [choiceOption, setChoisePotion] = useState(options[0].value);

  const handleClear = () => {
    localStorage.clear();
    onSubmit([]);
  };

  const handleQuestion = (value) => {
    setAddQuestion(value);
  };

  const handleOption = (value) => {
    setChoisePotion(value);
  };

  const handleSubmit = () => {
    const resault = [...customQuestions];
    const selectedSectionIndex = resault.findIndex(
      ({ section }) => section === choiceOption
    );
    if (selectedSectionIndex === -1) {
      const createdSectionWithQuestion = {
        section: choiceOption,
        id: choiceOption,
        questions: [{ question: addQuestion, id: choiceOption + addQuestion }],
      };
      resault.push(createdSectionWithQuestion);
    } else {
      const createdQuestion = {
        question: addQuestion,
        id: choiceOption + addQuestion,
      };
      resault[selectedSectionIndex].questions.push(createdQuestion);
    }
    localStorage.setItem("customQuestions", JSON.stringify(resault));
    onSubmit(resault);
  };

  return (
    <div className="questionForm">
      <div className="addQuestion">
        <Input
          variant="faqImput"
          text="Add your question"
          handleChange={handleQuestion}
        />
        <Select options={options} handleChange={handleOption}></Select>
      </div>
      <div>
        <Button label="Submit" variant="blueBackground" click={handleSubmit} />
        <Button label="Clear" variant="blueBackground" click={handleClear} />
      </div>
    </div>
  );
};

export default QuestionForm;
