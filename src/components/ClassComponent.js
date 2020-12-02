import React, {Component} from 'react'
import FunctionalComponent from './FunctionalComponent'
// import React from 'react'
// class ClassComponent extends React.Component

class ClassComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Matias',
            count: 0,
        }
    }

    incrementCount() {
        // this.state.count += 1
        this.setState({
            count: this.state.count + 1
        })

        //state = {...state, count: this.state.count + 1}
        //state = Object.assign(this.state, {count: this.state.count + 1} )
    }

    decrementCount() {
        // this.state.count -= 1
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
          <div>
            <h1>Class Component</h1>
            <p>My name is <span>{ this.state.name }</span></p>
            <p>My count is {this.state.count}</p>
            <button onClick={() => this.decrementCount()}>-</button>
            <button onClick={() => this.incrementCount()}>+</button>
            <FunctionalComponent someProp="Test" name={this.state.name} count={this.state.count}/>
          </div>
        );
    }
}

export default ClassComponent