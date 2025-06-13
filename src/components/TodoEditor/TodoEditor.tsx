import "./TodoEditor.scss";
import { useState, useRef } from "react";

interface TodoEditorProps {
    onCreate: (content: string) => void;
}

function TodoEditor({ onCreate }: TodoEditorProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [text, setText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onClickAddTodo = () => {
        inputRef.current?.focus();
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
}

export default TodoEditor;
