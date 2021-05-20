import React from 'react';
import { Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './CardItem.scss';

function CardItem(props) {
    const { id, img, description, link, linkText } = props.data;
    return (
        <Card id={id} onClick={() => { props.history.push('/article/' + props.data.id); }} className='cardItem'>
            <Card.Body>
                <Card.Img variant="top" src={img} />
                <Card.Text>{description}<Card.Link href={link}>{linkText}</Card.Link>
                </Card.Text>
            </Card.Body>
        </Card >
    );
}

export default withRouter(CardItem);