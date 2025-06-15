import "./TodoItem.scss";
import { Todo, TodoContext } from "../../App";
import React from "react";

interface TodoItemProps {
    todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
    const storeData = React.useContext(TodoContext);

    if (!storeData) {
        throw new Error("TodoItem must be used within a TodoContext.Provider");
    }

    const { onDeleteTodo: onDelete, onToggleTodo: onToggle } = storeData as {
        onDeleteTodo: (id: number) => void;
        onToggleTodo: (id: number) => void;
    };
    
    return (
        <div className="TodoItem">
            <div className="TodoItem__checkbox">
                <label>
                    <input
                        type="checkbox"
                        checked={todo.isDone}
                        onChange={(e) => {
                            onToggle(todo.id);
                        }}
                    ></input>

                    <span className="custom-checkbox"></span>
                </label>
            </div>
            <div className="TodoItem__title">{todo.content}</div>
            <div className="TodoItem__date">
                {new Date().toLocaleDateString()}
            </div>
            <button
                onClick={() => {
                    onDelete(todo.id);
                }}
                className="TodoItem__delete"
            >
                삭제
            </button>
        </div>
    );
}

export default React.memo(TodoItem);
