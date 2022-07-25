import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsData = [
  { id: 1, name: 'Andrew'},
  { id: 2, name: 'Egor'},
  { id: 3, name: 'Denis'},
  { id: 4, name: 'Ivan'},
  { id: 5, name: 'Ilya'},
]

const messagesData = [
  {id: 1, message: 'Hey, how are u?'},
  {id: 2, message: 'Whatsapp bro!'},
  {id: 3, message: 'Im glad to write u'},
  {id: 4, message: 'Im too'},
  {id: 5, message: 'U are very cute! :3'},
]

const postsData = [
  {id: 1, message: 'Its my first post!', likesCount: 3},
  {id: 2, message: 'Hello, World', likesCount: 10},
  {id: 3, message: 'How are you?', likesCount: 8},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
