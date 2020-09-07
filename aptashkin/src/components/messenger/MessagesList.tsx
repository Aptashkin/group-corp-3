import React, { useEffect, useRef } from 'react';
import { Message, MessageProps } from './Message';

export type MessagesListProps = {
    items: MessageProps[];
};

export const MessagesList: React.FC<MessagesListProps> = ({items}) => {
    const listRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const listDiv = listRef.current as HTMLDivElement;
        listDiv.scrollTop = listDiv.scrollHeight;
    });

    return (
        <div ref={listRef} className="message-list d-flex flex-column flex-grow-1 mb-4">
            {items.map(e => (<Message id={e.id} text={e.text} author={e.author} createDate={e.createDate} key={e.id}></Message>))}
        </div>
    );
}
