// cmd + \ : 에디터 분할
// control + command + 방향키 : 에디터 이동
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.scss";
const TodoList = ({ list, onDelete }) => {
    return (
        <div className="TodoList">
            <h3>Todo List</h3>
            <div className="TodoList__searchbar">
                <input type="text" placeholder="검색어를 입력하세요" />
            </div>
            <div className="TodoList__items">
                {list.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={() => {
                            onDelete(todo.id);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
