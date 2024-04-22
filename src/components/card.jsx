import React from 'react';
import Card from 'react-bootstrap/Card';

function CardSpecialities({ image, title, text }) {
  return (
    <Card className="d-flex align-items-center justify-content-center border-0 shadow p-5 w-100 h-100">
      <div className="text-center">
        <Card.Img src={image} className='img-fluid w-25' />
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