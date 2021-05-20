import React from 'react';
import './Article.scss';
import { Image, Container, Col } from 'react-bootstrap';
import Comment from './Comment/Comment';


function Article(props) {
    const { img, description, comment, commentTittle, mainText } = props.data;
    return (
        <Container>
            <Col xl={12}><h1>{description}</h1></Col>
            <Col xl={12}><Image src={img} fluid /></Col>
            <Col xl={12} className='mainText'><p>{mainText}</p></Col>
            <Col xl={12}> <Comment data={{ commentTittle, comment }}></Comment></Col >
        </Container >
    );
}

export default Article;