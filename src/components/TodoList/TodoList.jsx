import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";
const TodoList = () => {
    return (
        <div className="TodoList">
            <h3>Todo List</h3>
            <TodoItem></TodoItem>
        </div>
    );
};

export default TodoList;
