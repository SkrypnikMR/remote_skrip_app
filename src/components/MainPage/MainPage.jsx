import React from 'react';
import './MainPage.scss';
import { CardItem } from '..';
import { Container, Row, Col } from 'react-bootstrap';
import mockCards from '../../mockData/mockCards.json';

function MainPage(props) {
    const createCards = (mockCards) => {
        return mockCards.map(el => <Col xl={4}> <CardItem data={el} key={el.id} /></Col >);
    };
    return (
        <Container fluid >
            <Row >{createCards(mockCards)}</Row>
        </Container >
    );
}

export default MainPage;