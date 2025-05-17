import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./styles.css";

export const ResultCard = ({ correctSum }) => {
  const handleButtonClick = () => {
    window.location.reload();
  };
  return (
    <div className="text-center">
      <Card className="card mx-auto" style={{ width: "50%" }}>
        <Card.Body>
          <Card.Title>The game is finished!</Card.Title>
          <Card.Text>
            You managed to answer {correctSum} out of 10 questions!
          </Card.Text>
          <Button onClick={handleButtonClick} variant="outline-secondary">
            {" "}
            Play 1 more time
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
