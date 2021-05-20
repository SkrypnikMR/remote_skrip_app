import React from 'react';
import './Article.scss';
import { Image, Container, Col } from 'react-bootstrap';
import Comment from './Comment/Comment';


function Article(props) {
    let { imageUrl, description, expertComment, title } = props.data;
    return (
        <Container>
            <Col xl={12}><h1>{title}</h1></Col>
            <Col xl={12}><Image src={imageUrl} fluid /></Col>
            <Col xl={12} className='mainText'><p>{description}</p></Col>
            <Col xl={12}> <Comment data={{ expertComment }}></Comment></Col >
        </Container >
    );
}

export default Article;