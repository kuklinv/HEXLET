import React, {Component} from 'react';
import './App.css';
import BtnGroup from "./components/ButtonGroup/ButtonGroup.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Its React course on HEXLET
                <div>
                    <BtnGroup/>
                </div>
            </header>
        </div>
    );
}

export default App;
