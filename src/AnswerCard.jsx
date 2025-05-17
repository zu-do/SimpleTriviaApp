import Card from "react-bootstrap/Card";

export const AnswerCard = ({ answer, handleCardClick }) => {
  const handleClick = () => {
    handleCardClick(answer);
  };

  return (
    <Card
      onClick={handleClick}
      className="card mx-auto"
      style={{
        width: "50%",
        display: "flex",
        cursor: "pointer"
      }}
    >
      <Card.Body>
        <Card.Title>
          {answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
        </Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};
