import { useState } from "react";

export default function State(){
    const [initialState, setInitialState] = useState(0);
    
    function increaseCount(e) {
        e.preventDefault();
        setInitialState(initialState + 5);
    }
    function decreaseCount(e) {
        e.preventDefault();
        setInitialState(initialState - 1);
    }
    return(
        <div className="count">
        <p>Count = {initialState}</p>
        <button onClick={increaseCount}>increase</button>
        <button onClick={decreaseCount}>decrease</button>
    </div>
)

}