// 바로 이전 탭으로 돌아가기 ctrl + tab
import { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import TodoList from "./components/TodoList/TodoList";

function App() {
    const idRef = useRef(3);
    const mockTodo = [
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
        constructor(params = {}) {
            const { id = Date.now(), content = "", isDone = false, createdDate = new Date().toDateString() } = params;

            this.id = id;
            this.content = content;
            this.isDone = isDone;
            this.createdDate = createdDate;
        }
    }

    const [todoList, setTodoList] = useState(mockTodo);

    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            content: content,
            isDone: false,
            createdDate: new Date().getTime,
        };
        setTodoList((prevList) => [newTodo, ...prevList]);
    };

    // const onClickAddTodo = (content) => {
    //     const newTodo = new TodoClass({
    //         // make id unique by using the current time in milliseconds
    //         id: Date.now(),
    //         content: content,
    //         createdDate: new Date().toDateString(),
    //     });

    //     setTodoList((prevList) => [...prevList, newTodo]);

    //     // Reset the input field in TodoEditor
    //     // This can be done by lifting the state up or using a ref in TodoEditor
    // };

    const onDeleteTodo = (id) => {
        setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
    };

    return (
        <div className="App">
            <Header></Header>
            <TodoEditor onCreate={onCreate}></TodoEditor>
            <TodoList list={todoList} onDelete={onDeleteTodo}></TodoList>
        </div>
    );
}

export default App;
