import React from 'react';
// import Add from './addComponent';
// import Addition from './AddComponent2';
// import First from './FirstComponent';
// import Second from './SecondComponent';
import ReactDOM from 'react-dom/client';
// import Student from './FunctionComponents/StudentTaskComponent';
// import Api from './WebApiUsingReact/ApiComponent';
import './index.css';
// import Login from './ExamPortalProjct/LoginComponent';
// import Root from './ExamPortalProjct/Admin/AdminRootComponent';
// import App from './App';
import { Topic } from './ExamPortalProjct/Admin/TopicComponent';
import { Common } from './ExamPortalProjct/CommonComponent';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <Common/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
