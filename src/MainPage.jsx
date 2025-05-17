import React, { useState, useEffect } from "react";
import { QuestionCard } from "./QuestionCard";
import { getQuestion } from "./utils/questionnaire-axios-utils";
import { ResultCard } from "./ResultCard";

export const MainPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(-1);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setQuestions([]);
    getQuestion()
      .then((data) => {
        setQuestions(data.results);
        setCurrentQIndex(0);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  }, []);

  const handleAnswerSelection = (correctAnswer = null) => {
    if (correctAnswer !== null) {
      setCorrectAnswers((prevAnswers) => [...prevAnswers, correctAnswer]);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQIndex <= questions.length - 1) {
      setCurrentQIndex((prevIndex) => prevIndex + 1);
    }
  };

  if (loading) {
    return <div className="loader"></div>;
  } else if (!loading) {
    return (
      <>
        {currentQIndex >= 0 && currentQIndex <= questions.length - 1 ? (
          <QuestionCard
            question={questions[currentQIndex]}
            handleAnswerSelection={handleAnswerSelection}
          />
        ) : currentQIndex === questions.length ? (
          <ResultCard correctSum={correctAnswers.length} />
        ) : null}
      </>
    );
  }
};
