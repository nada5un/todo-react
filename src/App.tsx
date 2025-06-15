import React, { useRef, useReducer, useCallback, useMemo } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import TodoList from "./components/TodoList/TodoList";

// import TestComp from "./components/TestComp/TestComp";

export interface Todo {
    id: number;
    content: string;
    isDone: boolean;
    createdDate: number;
}

function reducer(
    state: any,
    action: { type: string; newItem?: Todo; id?: number },
) {
    switch (action.type) {
        case "CREATE":
            if (!action.newItem) {
                throw new Error("newItem is required for CREATE action");
            }
            return [action.newItem, ...state];
        case "TOGGLE":
            if (action.id === undefined) {
                throw new Error("id is required for TOGGLE action");
            }
            return state.map((todo: Todo) =>
                todo.id === action.id
                    ? { ...todo, isDone: !todo.isDone }
                    : todo,
            );
        case "DELETE":
            if (action.id === undefined) {
                throw new Error("id is required for DELETE action");
            }
            return state.filter((todo: Todo) => todo.id !== action.id);
        default:
            return state;
    }
}

export const TodoListContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
    onCreateTodo: (content: string) => void;
    onToggleTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
} | null>(null);

export const TodoContext = React.createContext<null>(null);

function App() {
    const mockTodo: Todo[] = [
        {
            id: 0,
            isDone: false,
            content: "React 공부하기",
            createdDate: new Date().getTime(),
        },
        {
            id: 1,
            isDone: false,
            content: "빨래 널기",
            createdDate: new Date().getTime(),
        },
        {
            id: 2,
            isDone: false,
            content: "노래 연습하기",
            createdDate: new Date().getTime(),
        },
    ];

    const [list, dispatch] = useReducer(reducer, mockTodo);

    const idRef = useRef<number>(3);

    const onCreateTodo = (content: string) => {
        const newTodo: Todo = {
            id: idRef.current++,
            content: content,
            isDone: false,
            createdDate: new Date().getTime(),
        };

        dispatch({ type: "CREATE", newItem: newTodo });
    };

    const onToggleTodo = useCallback((id: number) => {
        dispatch({ type: "TOGGLE", id });
    }, []);

    const onDeleteTodo = useCallback((id: number) => {
        dispatch({ type: "DELETE", id });
    }, []);

    const memoizedList = useMemo(() => {
        return { onCreateTodo, onToggleTodo, onDeleteTodo };
    }, []);

    return (
        <div className="App">
            <Header />
            <TodoListContext.Provider value={list}>
                <TodoDispatchContext.Provider value={memoizedList}>
                    <TodoEditor />
                    <TodoList />
                </TodoDispatchContext.Provider>
            </TodoListContext.Provider>
        </div>
    );
}

export default App;
