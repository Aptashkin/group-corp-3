import React, { useEffect, useRef, useState } from 'react';
import { MessagesList, MessagesListProps } from './MessagesList';
import { Message, MessageProps } from './Message';
import { MessagesForm } from './MessagesForm';

const shortIdTools = require('shortid');

export type ChatProps = {
    messages: [];
};

export const Chat: React.FC<ChatProps> = ({ messages }) => {
    const [messagesState, setMessages]: [MessageProps[], any] = useState(messages);
    const [greetingState, setGreeting]: [boolean, any] = useState(false);
    const messageListRef = React.createRef<MessagesListProps>();

    const addMessageHandler = (message: MessageProps) => {
        setMessages([...messagesState, message]);
    }

    useEffect(() => {
        if (!greetingState) {
            const handler = setTimeout(() => botGreeting(), 3000);
            clearTimeout(handler);
            setGreeting(true);
        }
    });

    const botGreeting = () => setMessages([...messagesState, {
        id: shortIdTools.generate(),
        text: 'Добро пожаловать в чат! Это автоматическое сообщение.',
        author: 'Bot',
        createDate: new Date()
    }]);

    return (
        <div className="chat d-flex flex-column">
            <MessagesList items={messagesState}></MessagesList>
            <MessagesForm handleAddMessage={addMessageHandler}></MessagesForm>
        </div>
    );
}
