import React, { useRef } from 'react';
import '../02-useEffect/effect.css';
export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input className='form-control' placeholder='Su nombre' ref={inputRef} />
      <button className='btn btn-primary mt-3' onClick={handleClick}>
        Focus
      </button>
    </>
  );
};
