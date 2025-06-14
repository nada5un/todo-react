import { useReducer, useState } from "react";

function reducer(state: any, action: { type: string; data: number }) {
    switch (action.type) {
        case "RESET":
            return 0;
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        default:
            throw new Error("Unhandled action type");
    }
}

function TestComp() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <b>{count}</b>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>-</button>
                <button onClick={() => dispatch({ type: "RESET", data: 0 })}>RESET</button>
                <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>+</button>
            </div>
        </div>
    );
}
export default TestComp;
