import "./TodoEditor.scss";
import { useState, useRef } from "react";

interface TodoEditorProps {
    onCreate: (content: string) => void;
}

function TodoEditor({ onCreate }: TodoEditorProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [content, setContent] = useState("");

    const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const onClickAddTodo = () => {
        inputRef.current?.focus();
        const trimmedContent = content.trim();
        if (trimmedContent === "") {
            return;
        }
        onCreate(content);
        setContent("");
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
                <input
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    type="text"
                    placeholder="새로운 Todo..."
                />
                <button type="submit">추가</button>
            </form>
        </div>
    );
}

export default TodoEditor;
