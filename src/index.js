import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const rootNode = document.querySelector("#root");
ReactDOM.render(<App displayTextDefault="Drum machine" />, rootNode);