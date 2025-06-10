// 바로 이전 탭으로 돌아가기 ctrl + tab
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import TodoList from "./components/TodoList/TodoList";

function App() {
    class TodoClass {
        constructor({ id = 0, isCompleted = false, title = "", date = new Date().toDateString() }) {
            this.id = id;
            this.isCompleted = isCompleted;
            this.title = title;
            this.date = date;
        }
    }

    const [todoList, setTodoList] = useState([]);

    const onClickAddTodo = (title) => {
        console.log("onClickAddTodo", title);
    };

    return (
        <div className="App">
            <Header></Header>
            <TodoEditor onSubmit={onClickAddTodo}></TodoEditor>
            <TodoList></TodoList>
        </div>
    );
}

export default App;
