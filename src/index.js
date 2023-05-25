import React from 'react' // Step 1
import ReactDOM from 'react-dom' // Step 2
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'; //Step 2
import App from './App.js' // Step 3
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
        <App/>
    // </BrowserRouter>
);