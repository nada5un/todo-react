import TodoItem from "../TodoItem/TodoItem";
import React, { useState, useMemo } from "react";
import { Todo } from "../../App";
import "./TodoList.scss";

interface TodoListProps {
    list: Todo[];
    onDelete: (id: number) => void;
    onToggleTodo: (id: number) => void;
}

function TodoList({ list, onDelete, onToggleTodo }: TodoListProps) {
    const [search, setSearch] = useState("");

    const analyzeTodo = useMemo(() => {
        const totalCount = list.length;
        const doneCount = list.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return { totalCount, doneCount, notDoneCount };
    }, [list]);

    const { totalCount, doneCount, notDoneCount } = analyzeTodo;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className="TodoList">
            <h3>Todo List</h3>
            <div className="TodoList__analyze">
                <span>총 할 일: {totalCount}</span>
                <span>완료된 할 일: {doneCount}</span>
                <span>미완료 할 일: {notDoneCount}</span>
            </div>

            <div className="TodoList__searchbar">
                <input
                    value={search}
                    type="text"
                    placeholder="검색어를 입력하세요"
                    onChange={handleChange}
                />
            </div>

            <div className="TodoList__items">
                {list
                    .filter((todo) =>
                        todo.content
                            .toLowerCase()
                            .includes(search.toLowerCase()),
                    )
                    .map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDelete={onDelete}
                            onToggle={onToggleTodo}
                        />
                    ))}
            </div>
        </div>
    );
}

export default TodoList;
