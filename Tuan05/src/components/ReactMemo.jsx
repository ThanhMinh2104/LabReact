import React from "react";
import { useState } from "react";
import "./ReactMemo.css";

const ChildComponent = React.memo(({ childState }) => {
    console.log("child comp rerender");
    return (
        <div className="child-container">
            <p>Child State: {childState}</p>
        </div>
    );
});

const ReactMemo = () => {
    const [childState, setChildState] = useState("true");
    const [parentState, setParentState] = useState("true");

    return (
        <div className="parent-container">
            <div className="controls">
                <p>Parent State: {parentState}</p>
                <button
                    className="btn"
                    onClick={() => setParentState(parentState === "true" ? "false" : "true")}
                >
                    Change Parent State
                </button>
                <button
                    className="btn"
                    onClick={() => setChildState(childState === "true" ? "false" : "true")}
                >
                    Change Child State
                </button>
            </div>
            <ChildComponent childState={childState} />
        </div>
    );
};

export default ReactMemo;