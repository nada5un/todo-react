// cmd + \ : 에디터 분할
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";
const TodoList = () => {
    return (
        <div className="TodoList">
            <h3>Todo List</h3>
            <div className="TodoList__wrapper">
                <input type="text" placeholder="검색어를 입력하세요" />
            </div>
            <TodoItem></TodoItem>
        </div>
    );
};

export default TodoList;
