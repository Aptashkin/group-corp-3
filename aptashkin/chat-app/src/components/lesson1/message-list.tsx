import React from 'react';
import { Message } from './message';

type Props = {
    items?: string[],
};

const MessageList = ({items = []}: Props): any => {
    const messages = items.map((item, index) => <Message text={item} key={index}></Message>);
    return (<>{messages}</>)
};

export { MessageList };
