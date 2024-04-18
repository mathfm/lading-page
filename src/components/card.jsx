
import Card from "react-bootstrap/Card";

function HeaderAndFooterExample({ title, image, text }) {
  return (
    <Card className="card ">
      <Card.Img variant="top" src={image} className="card-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HeaderAndFooterExample;
