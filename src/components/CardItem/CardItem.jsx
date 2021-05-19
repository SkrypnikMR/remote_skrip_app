import React from 'react';
import { Card } from 'react-bootstrap';
import './CardItem.scss';

function CardItem(props) {
    const { id, img, description, link, linkText } = props.data;
    return (
        <Card id={id} style={{ border: 'none' }}>
            <Card.Body>
                <Card.Img variant="top" src={img} />
                <Card.Text>{description}<Card.Link href={link}>{linkText}</Card.Link>
                </Card.Text>
            </Card.Body>
        </Card >
    );
}

export default CardItem;