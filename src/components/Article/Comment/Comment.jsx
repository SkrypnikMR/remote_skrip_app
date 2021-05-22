import React from 'react';
import { Card } from 'react-bootstrap';
import './Comment.scss';

function Comment(props) {
    let { expertComment } = props.data;
    return (
        <Card className='comment'>
            <Card.Body>
                <Card.Title>Expert Comment</Card.Title>
                <Card.Text>{expertComment}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Comment;