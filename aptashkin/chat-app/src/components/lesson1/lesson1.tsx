import React, { useState } from 'react';
import { MessageButton } from './message-button';
import { MessageList } from './message-list';

const Lesson1 = (): any => {
    const [messages, setMessages]: [string[], any] = useState(['Уже существующее сообщение']);
    const addMessage = () => setMessages([...messages, 'Новое сообщение']);

    return (
        <>
            <div>
                <span>Список сообщений: </span>
                <span>
                    <MessageButton callback={addMessage}>
                        Добавить сообщение
                    </MessageButton>
                </span>
            </div>
            <MessageList items={messages}></MessageList>
        </>
    );
};

export { Lesson1 };
