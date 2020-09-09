import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

export class TodoListForm extends React.Component<TodoListFormProps> {
    public state: TodoListFormState = {
        text: ''
    };

    public handleTextChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newState = {[event.target.name]: event.target.value};
        this.setState(newState);
    };

    public handleAddTask = (): void => {
      this.props.handleAddTask(this.state as TodoTaskProps);
      this.setState({text: ''});
    };

    render() {
        return (
            <Form>
                <Form.Row className="align-items-center">
                    <Col>
                        <Form.Control name="text" type="text" value={this.state.text} placeholder="Введите описание задачи" onChange={this.handleTextChanged}></Form.Control>
                    </Col>
                    <Col xs="auto">
                        <Button onClick={this.handleAddTask} className="mr-2">Добавить</Button>
                        <Button variant="light" onClick={this.props.handleClear}>Очистить</Button>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}
