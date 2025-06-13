import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import TodoList from "./components/TodoList/TodoList";

export interface Todo {
    id: number;
    content: string;
    isDone: boolean;
    createdDate: number;
}

function App() {
    const idRef = useRef<number>(3);
    const mockTodo: Todo[] = [
        {
            id: 0,
            isDone: false,
            content: "리액트 공부하기",
            createdDate: new Date().getTime(),
        },
        {
            id: 1,
            isDone: false,
            content: "빨래 널기",
            createdDate: new Date().getTime(),
        },
        {
            id: 2,
            isDone: false,
            content: "노래 연습하기",
            createdDate: new Date().getTime(),
        },
    ];
    class TodoClass {
        id: number;
        content: string;
        isDone: boolean;
        createdDate: number | string;
        constructor(params: Partial<Todo> = {}) {
            const { id = Date.now(), content = "", isDone = false, createdDate = new Date().toDateString() } = params;
            this.id = id;
            this.content = content;
            this.isDone = isDone;
            this.createdDate = createdDate;
        }
    }

    const [todoList, setTodoList] = useState<Todo[]>(mockTodo);

    const onCreate = (content: string) => {
        const newTodo: Todo = {
            id: idRef.current++,
            content: content,
            isDone: false,
            createdDate: new Date().getTime(),
        };
        setTodoList((prevList) => [newTodo, ...prevList]);
    };

    const onDeleteTodo = (id: number) => {
        setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
    };

    return (
        <div className="App">
            <Header />
            <TodoEditor onCreate={onCreate} />
            <TodoList list={todoList} onDelete={onDeleteTodo} />
        </div>
    );
}

export default App;
