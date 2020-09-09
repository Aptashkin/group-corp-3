import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoList } from './components/todo-list/TodoList';
import { GoGear } from 'react-icons/all';

function App() {
    return (
        <Container>
            <Row>
                <Col>
                    <header>
                        <Navbar bg="light" expand="lg">
                            <Navbar.Brand>Aptashkin</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    {/* В дальнейшем тут будет роутинг */}
                                </Nav>
                                {/*<GoGear></GoGear>*/}
                            </Navbar.Collapse>
                        </Navbar>
                    </header>
                    <div className="mt-4">
                        <TodoList></TodoList>
                    </div>
                    <footer></footer>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
