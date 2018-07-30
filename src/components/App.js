import React, { Component } from 'react';

class App extends Component {
    incrementFunc = () => {
        this.props.increment({ increase: 1 })
    };

    render() {
        return (
            <div>
                <h1>{ this.props.counter }</h1>
                <input onClick={ this.incrementFunc } type='button' value='Increment'/>
                <input onClick={ () => this.props.decrement({ decrease: 1 }) } type='button' value='Decrement'/>
            </div>
        );
    }
}

export default App;
