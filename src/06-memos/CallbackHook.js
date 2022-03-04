import { useCallback, useState } from 'react';
import '../02-useEffect/effect.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(() => {
    setCounter(prevState => prevState + 1);
  }, [setCounter]);

  return (
    <div>
      <h1>CallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};