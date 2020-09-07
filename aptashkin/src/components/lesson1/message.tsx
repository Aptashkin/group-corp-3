import React from 'react';

type Props = {
    text: string,
    author?: string
};

const Message = ({text, author = 'default author'}: Props) => (
    <div>
        <strong>{text}</strong>
        <small> от {author}</small>
    </div>
);

export { Message };
