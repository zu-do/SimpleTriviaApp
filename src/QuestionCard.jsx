import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { AnswerCard } from "./AnswerCard";
import "./styles.css";

export const QuestionCard = ({ question, handleAnswerSelection }) => {
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    const allAnswers = [...question.incorrect_answers, question.correct_answer];
    const shuffled = [...allAnswers];
    //making a random order of answers
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledAnswers(shuffled);
    setCorrectAnswer(question.correct_answer);
  }, [question]);

  const handleCardClick = (answer) => {
    if (answer) {
      if (answer === correctAnswer) {
        handleAnswerSelection(answer);
      } else {
        handleAnswerSelection();
      }
    }
  };

  return (
    <div>
      <div className="text-center">
        <Card className="card mx-auto" style={{ width: "50%" }}>
          <Card.Header>Domante's Questionnaire</Card.Header>
          <Card.Body>
            <Card.Title>
              {question.question
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'")}
            </Card.Title>
            {shuffledAnswers.map((answer, index) => (
              <AnswerCard
                key={index}
                answer={answer}
                handleCardClick={handleCardClick}
              />
            ))}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
