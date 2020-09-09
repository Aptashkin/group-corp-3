import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ChatList } from './ChatList';
import './Messenger.scss';
import { Chat } from './Chat';

export const Messenger: React.FC<MessengerProps> = () => {
    return (
        <div className="messenger">
            <Row className="pl-4">
                <h2>Messenger</h2>
            </Row>
            <Row className="mt-4">
                <Col xs="3">
                    <ChatList></ChatList>
                </Col>
                <Col xs="9">
                    <Chat messages={[]}></Chat>
                </Col>
            </Row>
        </div>
    );
}
