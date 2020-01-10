import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCounter, increaseCounter } from './counter.reducer'

function CounterComponent() {
    const counter = useSelector(selectCounter);
    const dispatch = useDispatch();
    function increase() {
        dispatch(increaseCounter(1));
    }
    return (
        <div>
            <p>counter: {counter}</p>
            <button onClick={increase}>increase</button>
        </div>
    )
}

export default CounterComponent
