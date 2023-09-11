import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {initializeAxios} from './tp21-todo-single-page-http/http/apiUtils';
// For REDUX =>  import App from './App';
// import {initializeAxios} from './tp23-todo-full-http/app/todo/http/apiUtils';
// import App from './tp13-demo-lifecycle-hooks-FC/hook-flow';
// import App from './tp11-demo-lifecycle-CC/component-flow';
// import {Todo} from './tp09-todo-multicomp/Todo';
// import {Todo} from './tp08-todo/Todo';
// import {Todo} from './tp08-todo-init/Todo';

// <Todo/>,

//initializeAxios();

const root = ReactDOM.createRoot(document.getElementById('root'));

// With StrictMode, the render is done twice, so we have to remove it for the demos to work
// useEffects are called twice, once for each render
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// Without StrictMode, the render is done once, as well as useEffect
// root.render(
//   <App/>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
