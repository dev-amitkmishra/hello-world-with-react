import React, {Component} from 'react';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = {'greet': ['Amy', 'KMishra']};
        this.addGreeting = this.addGreeting.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }
    addGreeting(newName) {
        this.setState({'greet': [...this.state.greet, newName]})
    }
    removeGreeting(name) {
        const filteredList = this.state.greet.filter(element => {
            return element !== name;
        })
        this.setState({'greet': filteredList});
    }
    renderGreetings() {
        return this.state.greet.map(element => (
            <HelloWorld name={element} key={element} removeGreeting={this.removeGreeting} />
        ));
    }
    render() {
        return (
            <div className="HelloWorldList">
                <AddGreeter addGreeting={this.addGreeting} />
                {this.renderGreetings()}
            </div>
        )
    }
}

export default HelloWorldList;