import React from 'react';
import { Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './CardItem.scss';

function CardItem(props) {
    const { id, imageUrl, title } = props.data;
    console.log(id);
    return (
        <Card id={id} onClick={() => { props.history.push('/article/' + id); }} className='cardItem'>
            <Card.Body>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Text>{title}
                </Card.Text>
            </Card.Body>
        </Card >
    );
}

export default withRouter(CardItem);