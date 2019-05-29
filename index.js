// creating necessary components
import React from "react";
import ReactDOM from "react-dom";



class TimerInput extends React.Component {
    render() {
        return (
            <div style={{marginLeft:100}}>
                <h3>Input your desired time</h3>
                <input type="number" minutes={this.props.minutes} required />
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
            this.state = {}
                seconds: '00', // responsible for the seconds
                minutes: '' // responsible for the minutes
    }
}

// need to bind the method to the constructor

this.handlChange = this.handleChange.bind(this);

handleChange(event) {
    this.setState({
        minutes: event.target.value
    })
}

    render() {
        return (
            <div>
                <TimerInput />
                <Timer />
                <StartButton />
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

    }

    render() {
        return (
            <div>
                <TimerInput minutes={this.state.minutes}/>
                <Timer minutes={this.state.minutes}
                seconds={this.state.seconds}/>
                <StartButton/>
            </div>
        );

    }
}