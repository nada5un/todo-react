// commant + \ : 에디터 탭 추가
import "./TodoEditor.scss";
import { useState, useRef } from "react";

const TodoEditor = ({ onCreate }) => {
    const inputRef = useRef(null); // if you want to focus on input after submit
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const onClickAddTodo = () => {
        inputRef.current.focus();
        if (text.trim() === "") {
            return;
        }
        onCreate(text);
        setText("");
    };

    return (
        <div className="TodoEditor">
            <h3>새로운 Todo 작성하기 ✏️</h3>
            <form
                className="TodoEditor__wrapper"
                onSubmit={(e) => {
                    e.preventDefault();
                    onClickAddTodo();
                }}
            >
                <input ref={inputRef} value={text} onChange={handleChange} type="text" placeholder="새로운 Todo..." />
                <button type="submit">추가</button>
            </form>
        </div>
    );
};

export default TodoEditor;
