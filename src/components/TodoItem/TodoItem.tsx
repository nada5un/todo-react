import "./TodoItem.scss";
import { Todo } from "../../App";

interface TodoItemProps {
    todo: Todo;
    onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
    return (
        <div className="TodoItem">
            <div className="TodoItem__checkbox">
                <label>
                    <input type="checkbox" />
                    <span className="custom-checkbox"></span>
                </label>
            </div>
            <div className="TodoItem__title">{todo.content}</div>
            <div className="TodoItem__date">{new Date().toLocaleDateString()}</div>
            <button
                onClick={() => {
                    onDelete();
                }}
                className="TodoItem__delete"
            >
                삭제
            </button>
        </div>
    );
};

export default TodoItem;
