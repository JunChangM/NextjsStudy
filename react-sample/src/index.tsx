import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Name from './components/Name';
import Message from './components/Message';
import ContextSample from './components/ContextSample';
import ContainerSample from './components/ContainerSample';
import Parent from './components/Parent';
import Clock from './components/Clock';
import UseMemoSample from './components/UseMemoSample';

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <Name />
    <Message />
    <ContextSample />
    <ContainerSample />
    <Parent />
    <Clock />
    <UseMemoSample />
    
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
