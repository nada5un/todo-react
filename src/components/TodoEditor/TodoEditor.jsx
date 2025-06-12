import "./TodoEditor.scss";
import { useState, useRef } from "react";

const TodoEditor = ({ onSubmit }) => {
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
        onSubmit(text);
        setText("");
    };

    return (
        <div className="TodoEditor">
            <h3>새로운 Todo 작성하기 ✏️</h3>
            <div className="TodoEditor__wrapper">
                <input
                    ref={inputRef}
                    value={text}
                    onChange={handleChange}
                    type="text"
                    placeholder="새로운 Todo..."
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onClickAddTodo();
                        }
                    }}
                />
                <button onClick={onClickAddTodo} type="button">
                    추가
                </button>
            </div>
        </div>
    );
};

export default TodoEditor;
