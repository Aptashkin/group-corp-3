import Moment from 'react-moment';
import React from 'react';
import classNames from 'classnames';

export type MessageProps = {
    id: string;
    text: string;
    author: string;
    createDate: Date;
};

export const Message: React.FC<MessageProps> = ({ text, author, createDate }) => {

    return (
        <div className={classNames(
            'mt-4',
            'message',
            'd-flex',
            'flex-column',
            author === 'Bot' ? 'align-self-start' : 'align-self-end',
            { 'bot-message': author === 'Bot' })}>
            <div className="message-text">{text}</div>
            <div className="message-footer d-flex">
                <small className="d-flex flex-grow-1 text-muted">{author}</small>
                <small className="text-muted">
                    <Moment format="DD.MM.YYYY HH:mm:ss" date={createDate}></Moment>
                </small>
            </div>
        </div>
    );
}
