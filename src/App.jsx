// 바로 이전 탭으로 돌아가기 ctrl + tab
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import TodoList from "./components/TodoList/TodoList";

function App() {
    class TodoClass {
        // make id time-stamp based
        constructor({ id = 0, isCompleted = false, title = "", date = new Date().toDateString() }) {
            this.id = id;
            this.isCompleted = isCompleted;
            this.title = title;
            this.date = date;
        }
    }

    const [todoList, setTodoList] = useState([]);

    const onClickAddTodo = (title) => {
        const newTodo = new TodoClass({
            // make id unique by using the current time in milliseconds
            id: Date.now(),
            title: title,
            date: new Date().toDateString(),
        });

        setTodoList((prevList) => [...prevList, newTodo]);

        // Reset the input field in TodoEditor
        // This can be done by lifting the state up or using a ref in TodoEditor
    };

    const onDeleteTodo = (id) => {
        setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
    };

    return (
        <div className="App">
            <Header></Header>
            <TodoEditor onSubmit={onClickAddTodo}></TodoEditor>
            <TodoList list={todoList} onDelete={onDeleteTodo}></TodoList>
        </div>
    );
}

export default App;
