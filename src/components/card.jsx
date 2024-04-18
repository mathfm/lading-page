import React from 'react';
import Card from 'react-bootstrap/Card';

function CardSpecialities({ image, title, text }) {
  return (
    <Card className="d-flex align-items-center justify-content-center" style={{ height: '40vh', width: '18vw', boxShadow: '4px 4px 6px 0px rgba(0, 0, 0, 0.5)', padding: '5px', border: 'none'}}>
      <div className="text-center">
        <Card.Img src={image} style={{ width: "82px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}

export default CardSpecialities;