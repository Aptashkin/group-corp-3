import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { GoCheck, GoX } from 'react-icons/all';
import classNames from 'classnames';

export class TodoTask extends React.Component<TodoTaskProps> {
    public state: TodoTaskState = {
        checked: false
    };

    public handleChecked = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({checked: event.target.checked});
    }

    render() {
        return (
            <Row className="pl-3 pr-3 align-items-center">
                <Form.Check onChange={this.handleChecked} disabled={this.state.checked}></Form.Check>
                <div className="d-flex flex-grow-1">
                    <div className={classNames('pl-3', 'pr-3', {'text-muted': this.state.checked})}>
                        {this.props.text}
                    </div>
                </div>
                {!this.state.checked ?
                    <span onClick={() => this.props.handleOnDelete()}>
                        <GoX ></GoX>
                    </span> :
                    <GoCheck className="text-success"></GoCheck>}
            </Row>
        )
    }
}
