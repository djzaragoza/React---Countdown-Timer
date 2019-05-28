// creating necessary components
import React from "react";
import ReactDOM from "react-dom";



class TimerInput extends React.Component {
    render() {
        return (
            <div>
                <h3>Input your desired time</h3>
                <input type="number" required />
            </div>
        );
    }
}

class Timer extends React.Component {
    render() {
        return (
            <div>
                <h1> </h1>
            </div>
        );
    }
}

class StartButton extends React.Component {
    render() {
        return (
            <div>
                <button>Start</button>
            </div>
        );
    }
}