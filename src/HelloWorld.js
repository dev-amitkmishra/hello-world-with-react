import React, { Component } from 'react';
import './App.css'

class HelloWorld extends Component {
    constructor (props) {
        super(props);
        this.state = {'greetings': 'Hello'};
        this.changeMe = this.changeMe.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }
    render() {
        return (
            <div className="HelloWorld">
                {this.state.greetings} World from {this.props.name}!
                <button onClick={this.changeMe}>Change Me</button>
                <button onClick={this.removeGreeting}>Remove Me</button>
            </div>
        )
    }

    changeMe () {
        this.setState({'greetings' : 'Bonjour'});
    }
    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }
}

export default HelloWorld;
