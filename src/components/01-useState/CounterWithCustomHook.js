import React from 'react';
import {useCounter} from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(10);

    return(
        <div>
            <h1>counter with hook: {state}</h1>
            <hr/>
            <button onClick={() => increment(1)} className="btn btn-info">+1</button>
            <button onClick={() => decrement(1)} className="btn btn-warning">-1</button>
            <button onClick={() => reset()} className="btn btn-secondary">reset</button>  
        </div>
    );
}