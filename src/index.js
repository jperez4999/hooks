import React from 'react';
import ReactDOM from 'react-dom';
import { MemoHook } from './06-memos/MemoHook';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHook } from './03-examples/MultipleCustomHook';
//import { CounterApp } from './01-useState/counterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { HooksApp } from './HooksApp';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { RealExampleRef } from './04-useRef/RealExampleRef';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { Memorize } from './06-memos/Memorize';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <MemoHook />,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
