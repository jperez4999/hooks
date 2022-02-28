import { useState } from 'react';
import './counter.css';

export const CounterApp = () => {
  const [{ counter1, counter2 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
  });

  return (
    <div>
      <h1>Counter {counter1}</h1>
      <h1>Counter2 {counter2}</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={() => {
          setCounter(prevState => ({ ...prevState, counter1: counter1 + 1 }));
        }}
      >
        +1
      </button>
    </div>
  );
};
