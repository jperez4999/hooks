import { useLayoutEffect, useRef } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import './layout.css';

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef();

  //este hook se dispara luego de haber renderizado todo nuestro componente
  useLayoutEffect(() => {
    console.log('hey', pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout</h1>
      <hr />

      <blockquote className='blockquote text-right'>
        <p className='mb-0' ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <button className='btn btn-primary' onClick={increment}>
        Siguiente Frase
      </button>
    </div>
  );
};
