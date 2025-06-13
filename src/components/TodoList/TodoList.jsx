// cmd + \ : 에디터 분할
// control + command + 방향키 : 에디터 이동
import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";
import "./TodoList.scss";
const TodoList = ({ list, onDelete }) => {
    // create text state
    const [search, setSearch] = useState("");
    // create a function to handle text change
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="TodoList">
            <h3>Todo List</h3>
            <div className="TodoList__searchbar">
                <input value={search} type="text" placeholder="검색어를 입력하세요" onChange={handleChange} />
            </div>
            <div className="TodoList__items">
                {list
                    .filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()))
                    .map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
                    ))}
            </div>
        </div>
    );
};

export default TodoList;
