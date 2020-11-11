import React, { Component } from 'react'

class Buttons extends Component {
    state = {
        count: 0
      }

    increment= (e) => {
        this.setState({
          count: this.state.count + 1
        });
        console.log(this.state.count)
      }
    
      decrement = (e) => {
        this.setState({
          count: this.state.count - 1
        });
        console.log(this.state.count)
      }

    render() {
        return (
            <div>
                <button onClick={this.state.increment}>+</button>
                <button onClick={this.state.decrement}>-</button>
            </div>
        )
    }
}

export default Buttons