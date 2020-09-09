type AppConfig = {
    format: string;
    author: string;
    lang: string;
}

// TodoList

type TodoListState = {
    items: TodoTaskProps[];
}

type TodoListFormProps = {
    handleAddTask: (task: TodoTaskProps) => void;
    handleClear: () => void;
}

type TodoListFormState = {
    text: string;
}

type TodoTaskProps = {
    text: string;
    handleOnDelete: () => void
}

type TodoTaskState = {
    checked: boolean;
}

// Messenger

type MessengerProps = {

}

type ChatProps = {

}

