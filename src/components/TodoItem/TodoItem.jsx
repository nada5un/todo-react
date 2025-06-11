// import css
import "./TodoItem.scss";

const TodoItem = ({ todo }) => {
    return (
        <div className="TodoItem">
            <div className="TodoItem__checkbox">
                <label>
                    <input type="checkbox" />
                    <span className="custom-checkbox"></span>
                </label>
            </div>
            <div className="TodoItem__title">title</div>
            <div className="TodoItem__date">2023.1.2</div>
            <button className="TodoItem__delete">삭제</button>
        </div>
    );
};

export default TodoItem;
