// creating necessary components
import React from "react";
import ReactDOM from "react-dom";



class TimerInput extends React.Component {
    render() {
        return (
            <div style={{marginLeft:100}}>
                <h3>Input your desired time</h3>
                <input type="number" minutes={this.props.minutes} 
                handleChange={this.props.handleChange} required />
            </div>
        );
    }
}

class Timer extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ fontSize: 100, marginLeft:100 }}>{this.props.minutes}:{this.props.seconds} </h1>
            </div>
        );
    }
}

class StartButton extends React.Component {
    render() {
        return (
            <div style={{ marginLeft: 130 }}>
                <button>Start</button>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                seconds: '00', // responsible for the seconds
                minutes: '' // responsible for the minutes
            }
            
            this.secondsRemaining;
            this.intervalHandle;
            this.handleChange = this.handleChange.bind(this);

            // method that triggers the countdown functionality

            this.startCountDown = this.startCountDown.bind(this);
            this.tick = this.tick.bind(this);
    }

    handleChange(event) {
        this.setState({
            minutes: event.target.value
        })
    }
}

// need to bind the method to the constructor

this.handlChange = this.handleChange.bind(this);

handleChange(event) {
    this.setState({
        minutes: event.target.value
    })
}

tick() {
    
var min = Math.floor(this.secondsRemaining / 60);
var sec = this.secondsRemaining - (min * 60);

this.setState({
    minutes: min,
    seconds: sec

})

if (sec < 10) {
    this.setState({
        seconds: "0" + this.state.seconds,
    })
}

if (min < 10) {
    
this.setState({
    value: "0" + min,
    })
}

if (min === 0 & sec === 0) {
    clearInterval(this.intervalHandle);
}

this.secondRemaining--

}

startCountDown() {

this.intervalHandle = setInterval(this.tick, 1000);
let time = this.state.minutes;
this.secondsRemaining = time * 60;

}

    render() {
        return (
            <div>
                <TimerInput minutes={this.state.minutes}/>
                <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
                <StartButton />
            </div>
        );
    }


// Update the TimerInput component



