import { FaqProvider } from "../../utils/contexts/faqContext";
import "./faq.css";
import React from "react";
import SectionsWithQuestions from "../../components/questions";
import QuestionForm from "../../components/question_form";
import CustomQuestions from "../../components/custom_questions";
import SearchQuestions from "../../components/search_questions";

const Faq = () => {
  return (
    <FaqProvider>
      <div className="faq">
        <div>
          <SearchQuestions />
        </div>
        <h1 className="h21">Frequently Asked Questions</h1>
        <div className="faqSection">
          <div className="QuestionForm">
            <p className="faq1">
              On this page you can find the answer to your question. If your
              problem is not described here, you can ask it yourself. Select the
              section that best fits your question.
              <br />
              <br />
              We will definitely answer you!.
            </p>
            <QuestionForm />
          </div>
          <div className="SectionsWithQuestions">
            <SectionsWithQuestions />
            <CustomQuestions />
          </div>
        </div>
      </div>
    </FaqProvider>
  );
};

export default Faq;
