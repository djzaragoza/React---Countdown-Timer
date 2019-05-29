import React, { Component } from "react";
import "./App.css";

class Stopwatch extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    startTimer = () => {
        this.setState ({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
    }

    render() {
        return (
            <div className="Stopwatch">
                <div className="Stopwatch-header">Stopwatch</div>
            </div>
        );
    }
}

export default Stopwatch;