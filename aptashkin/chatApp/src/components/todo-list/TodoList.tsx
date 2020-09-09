import React from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import { TodoListForm } from './TodoListForm';
import { TodoTask } from './TodoTask';

export class TodoList extends React.Component {
    public state: TodoListState = {
        items: []
    };

    public handleAddTask = (task: TodoTaskProps): void => {
        this.setState({items: [...this.state.items, task]});
    }

    public handleDeleteTask = (index: number): void => {
        this.setState({items: this.state.items.filter((e, i) => i !== index)});
    }

    public handleClear = (): void => {
        this.setState({items: []});
    }

    render() {
        return (
            <>
                <Row className="pl-4">
                    <h2>TODO List</h2>
                </Row>
                <Row className="mt-4 d-flex flex-column">
                    <ListGroup>
                        {
                            this.state.items.length ?
                                this.state.items.map((e, i) => (
                                    <ListGroup.Item key={i}>
                                        <TodoTask text={e.text} handleOnDelete={() => this.handleDeleteTask(i)}></TodoTask>
                                    </ListGroup.Item>
                                )) :
                                <ListGroup.Item>В данный момент вам нечего делать :)</ListGroup.Item>
                        }
                    </ListGroup>
                    <br />
                    <TodoListForm handleAddTask={this.handleAddTask} handleClear={this.handleClear}></TodoListForm>
                </Row>
            </>
        )
    }
}
