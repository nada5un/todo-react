import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";
import { Todo } from "../../App";
import "./TodoList.scss";

interface TodoListProps {
    list: Todo[];
    onDelete: (id: number) => void;
    onToggleTodo: (id: number, isDone: boolean) => void;
}

function TodoList({ list, onDelete, onToggleTodo }: TodoListProps) {
    const [search, setSearch] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDelete={() => onDelete(todo.id)}
                            onToggle={(id: number, isDone: boolean) => {
                                onToggleTodo(id, isDone);
                            }}
                        />
                    ))}
            </div>
        </div>
    );
}

export default TodoList;
