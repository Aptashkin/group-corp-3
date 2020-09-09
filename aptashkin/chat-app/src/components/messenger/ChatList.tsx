import React from 'react';
import { Nav } from 'react-bootstrap';

export const ChatList: React.FC<any> = () => {
    return (
        <Nav className="flex-column">
            <Nav.Link>Новый чат</Nav.Link>
            <Nav.Link eventKey="link-1">Новый чат(1)</Nav.Link>
            <Nav.Link eventKey="link-2">Новый чат(2)</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
                Удаленный чат
            </Nav.Link>
        </Nav>
    );
}
