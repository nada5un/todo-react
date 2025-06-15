import "./TodoEditor.scss";
import React, { useState, useRef, useContext } from "react";
import { TodoContext } from "../../App";

interface TodoEditorProps {
    onCreate: (content: string) => void;
}

function TodoEditor() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [content, setContent] = useState("");
    const storeData = useContext(TodoContext);

    if (!storeData) {
        throw new Error("TodoList must be used within a TodoContext.Provider");
    }

    const { onCreate } = storeData as TodoEditorProps;

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
