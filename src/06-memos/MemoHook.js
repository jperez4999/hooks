import { useState, useMemo } from 'react';
import { useCounter } from '../hooks/useCounter';
import '../02-useEffect/effect.css';
import { heavyProcess } from '../helpers/heavyProcess';

export const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(true);

  const heavyProcessMemo = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter : <small> {counter} </small>
      </h3>
      <hr />

      {heavyProcessMemo}
      <button className='btn btn-primary' onClick={increment}>
        +1
      </button>
      <button
        className='btn btn-outline-primary ml-3'
        onClick={() => setShow(!show)}
      >
        show / hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
