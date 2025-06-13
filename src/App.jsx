// 바로 이전 탭으로 돌아가기 ctrl + tab
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import TodoList from "./components/TodoList/TodoList";

function App() {
    class TodoClass {
        constructor(params = {}) {
            const {
                id = Date.now(),
                content = "",
                isCompleted = false, // 예전 isDone → isCompleted로 바꾼 예시
                createdDate = new Date().toDateString(),
            } = params;

            this.id = id;
            this.content = content;
            this.isCompleted = isCompleted;
            this.createdDate = createdDate;
        }
    }

    const [todoList, setTodoList] = useState([]);

    const onClickAddTodo = (content) => {
        const newTodo = new TodoClass({
            // make id unique by using the current time in milliseconds
            id: Date.now(),
            content: content,
            createdDate: new Date().toDateString(),
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
