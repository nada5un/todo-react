import "./TodoEditor.scss";
import { useState } from "react";

const TodoEditor = ({ onSubmit }) => {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="TodoEditor">
            <h3>새로운 Todo 작성하기 ✏️</h3>
            <div className="TodoEditor__wrapper">
                <input value={text} onChange={handleChange} type="text" placeholder="새로운 Todo..." />
                <button
                    onClick={() => {
                        if (text.trim() === "") return;
                        onSubmit(text);
                        setText("");
                    }}
                    type="button"
                >
                    추가
                </button>
            </div>
        </div>
    );
};

export default TodoEditor;
