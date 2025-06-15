import "./TodoEditor.scss";
import React, { useState, useRef, useContext } from "react";
import { TodoContext, TodoDispatchContext } from "../../App";

interface TodoEditorProps {
    onCreateTodo: (content: string) => void;
}

function TodoEditor() {
    const storeData = useContext(TodoDispatchContext);

    const [content, setContent] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);

    if (!storeData) {
        throw new Error("TodoList must be used within a TodoContext.Provider");
    }

    const { onCreateTodo } = storeData as TodoEditorProps;

    const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const onClickAddTodo = () => {
        inputRef.current?.focus();
        const trimmedContent = content.trim();
        if (trimmedContent === "") {
            return;
        }
        onCreateTodo(content);
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
