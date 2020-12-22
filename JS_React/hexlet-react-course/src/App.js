import React, {Component} from 'react';
import './App.css';
import ButtonGroup from "./components/ButtonGroup/ButtonGroup.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Its React course on HEXLET
                <div>
                    <ButtonGroup/>
                </div>
            </header>
        </div>
    );
}

export default App;
