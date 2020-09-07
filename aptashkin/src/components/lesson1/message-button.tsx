import React, { MouseEventHandler, ReactNode } from 'react';

type Props = {
    callback?: MouseEventHandler,
    children?: ReactNode
};

const MessageButton = ({ callback, children }: Props) => (
    <button onClick={callback}>{children}</button>
);

export { MessageButton };
