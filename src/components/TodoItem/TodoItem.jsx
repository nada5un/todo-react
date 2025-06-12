// import css
import "./TodoItem.scss";

const TodoItem = ({ todo, onDelete }) => {
    return (
        <div className="TodoItem">
            <div className="TodoItem__checkbox">
                <label>
                    <input type="checkbox" />
                    <span className="custom-checkbox"></span>
                </label>
            </div>
            <div className="TodoItem__title">{todo.title}</div>
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
