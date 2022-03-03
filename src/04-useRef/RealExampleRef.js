import { useState } from 'react';
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';
import '../02-useEffect/effect.css';

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHook />}
      <button
        className='btn btn-primary mt-5'
        onClick={() => {
          setShow(!show);
        }}
      >
        Mostrar / ocultar
      </button>
    </>
  );
};
