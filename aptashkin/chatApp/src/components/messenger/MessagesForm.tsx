import React, { ChangeEvent, useRef, useState } from 'react';
import { Message, MessageProps } from './Message';
import { Col, Form } from 'react-bootstrap';
import { FaTelegramPlane } from 'react-icons/all';
const shortIdTools = require('shortid');

export type MessagesFormProps = {
    handleAddMessage: (message: MessageProps) => void;
};

export const MessagesForm: React.FC<MessagesFormProps> = ({handleAddMessage}) => {
    const [messageText, setMessageText]: [string, any] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const textChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setMessageText(event.target.value);
    }

    const addMessageHandler = () => {
        handleAddMessage({ id: shortIdTools.generate(), text: messageText, author: 'you', createDate: new Date() } as MessageProps);
        setMessageText('');
        inputRef.current?.focus();
    }

    return (
        <div className="messages-form d-flex">
            <Form className="flex-grow-1">
                <Form.Row className="align-items-center">
                    <Col className="mr-2">
                        <Form.Control type="text" value={messageText} onChange={textChangeHandler} ref={inputRef}></Form.Control>
                    </Col>
                    <Col xs="auto" className="send-button pr-2">
                        <FaTelegramPlane onClick={() => addMessageHandler()}></FaTelegramPlane>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
}
