import "./TodoItem.scss";
import { Todo } from "../../App";

interface TodoItemProps {
    todo: Todo;
    onDelete: (id: number) => void;
    onToggle: (id: number, isDone: boolean) => void;
}

function TodoItem({ todo, onDelete, onToggle }: TodoItemProps) {
    return (
        <div className="TodoItem">
            <div className="TodoItem__checkbox">
                <label>
                    <input
                        type="checkbox"
                        checked={todo.isDone}
                        onChange={(e) => {
                            onToggle(todo.id, e.target.checked);
                        }}
                    ></input>

                    <span className="custom-checkbox"></span>
                </label>
            </div>
            <div className="TodoItem__title">{todo.content}</div>
            <div className="TodoItem__date">{new Date().toLocaleDateString()}</div>
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

export default TodoItem;
