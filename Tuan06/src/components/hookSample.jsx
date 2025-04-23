import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import React from "react";
import "./HookSample.css";

export const HookSample = () => {
    return (
        <div className="hook-sample-container">
            <UseStateSample />
            <UseRefSample />
            <UseEffectSample />
            <UseReducerSample />
            <UseMemoSample />
            <ReactMemoSample />
        </div>
    );
};

const UseStateSample = () => {
    const [num, setNum] = useState(0);
    return (
        <div className="sample-container">
            <h2 className="sample-title">useState Sample</h2>
            <p>Num: {num}</p>
            <input
                type="number"
                className="input"
                onChange={(e) => {
                    setNum(e.target.value);
                    console.log("rerender bởi useState Sample");
                }}
                placeholder="Nhập num"
            />
        </div>
    );
};

const UseRefSample = () => {
    const focusInput = useRef(null);
    const countRef = useRef(0);

    return (
        <div className="sample-container">
            <h2 className="sample-title">useRef Sample</h2>
            <input
                type="text"
                ref={focusInput}
                onChange={(e) => {
                    countRef.current = e.target.value;
                    console.log("countRef:", countRef);
                }}
                className="input"
                placeholder="Nhập text"
            />
            <button
                className="btn"
                onClick={() => {
                    focusInput.current.focus();
                }}
            >
                Focus Input
            </button>
        </div>
    );
};

const UseEffectSample = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://67cd6670dd7651e464ee43e8.mockapi.io/Recipe")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, []);
    return (
        <div className="sample-container">
            <h2 className="sample-title">useEffect Sample</h2>
            <div className="data-list">
                {data.map((item, index) => (
                    <p key={index} className="data-item">
                        - {item.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

const UseReducerSample = () => {
    const counterReducer = (state, action) => {
        switch (action) {
            case "+":
                return ++state;
            case "-":
                return --state;
            default:
                break;
        }
    };
    const [counter, counterDispatch] = useReducer(counterReducer, 0);
    return (
        <div className="sample-container">
            <h2 className="sample-title">useReducer Sample</h2>
            <p>Counter: {counter}</p>
            <div className="btn-group">
                <button className="btn" onClick={() => counterDispatch("+")}>
                    +
                </button>
                <button className="btn" onClick={() => counterDispatch("-")}>
                    -
                </button>
            </div>
        </div>
    );
};

const UseMemoSample = () => {
    const [state, setState] = useState(1);
    const [number, setNumber] = useState(0);
    const superHeavyCalculation = (number) => {
        let result = 0;
        for (let i = 0; i < 10; i++) result += number;
        console.log("vừa tính toán siu nặng");
        return result;
    };
    let result = useMemo(() => superHeavyCalculation(number), [number]);

    return (
        <div className="sample-container">
            <h2 className="sample-title">useMemo Sample</h2>
            <p>Result: {result}</p>
            <input
                type="number"
                onChange={(e) => setNumber(Number(e.target.value))}
                placeholder="Thay đổi số để useMemo thực hiện phép tính"
                className="input"
            />
            <button className="btn" onClick={() => setState(state === 1 ? 2 : 1)}>
                Đổi state để comp re-render
            </button>
        </div>
    );
};

const ChildCompReactMemo = React.memo(({ num }) => {
    console.log("childcomp re render trong React.memo sample");
    return (
        <div className="child-memo-container">
            <p>Prop truyền vào là số {num / 2 === 0 ? "chẵn" : "lẻ"}</p>
        </div>
    );
});

const ReactMemoSample = () => {
    const [num, setNum] = useState(0);
    const inputRef = useRef(null);
    return (
        <div className="sample-container">
            <h2 className="sample-title">React.memo Sample</h2>
            <input type="number" className="input" ref={inputRef} />
            <button className="btn" onClick={() => setNum(inputRef.current.value)}>
                Bấm để truyền prop
            </button>
            <ChildCompReactMemo num={num} />
        </div>
    );
};