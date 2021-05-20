import React from 'react';
import { Card } from 'react-bootstrap';
import './Comment.scss';

function Comment(props) {
    const { comment, commentTittle } = props.data;
    return (
        <Card className='comment'>
            <Card.Body>
                <Card.Title>{commentTittle}</Card.Title>
                <Card.Text>{comment}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Comment;