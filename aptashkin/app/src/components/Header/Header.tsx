import React from 'react';
import {Container, Row} from 'react-bootstrap';
import './Header.scss';

const Header = () => {
    return (
        <Container>
            <Row>
                <header>
                    что то сверху
                </header>
            </Row>
        </Container>
    )
}

export {Header};