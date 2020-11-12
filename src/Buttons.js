import React, { Component } from 'react'

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0,
        input: 0,
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleSubstract = this.handleSubstract.bind(this);
    }
    
      handleChange(event) {
        this.setState({
          input: Number(event.target.value)
        });
      }
      handleAdd(event) {
        event.preventDefault()
        this.setState({
          count: this.state.input + this.state.count
        });
      }

      handleSubstract(event) {
        event.preventDefault()
        this.setState({
          count: this.state.count - this.state.input
        });
      }

      increment(){
        this.setState({
          count: this.state.count + 1
        });
      }
    
      decrement(){
        this.setState({
          count: this.state.count - 1
        });
      }

    render() {
        return (
            <div className="container mainAlign">
            <h2 className="center red-text text-darken-4">The current value of the state is:</h2>
                <h1 className="center red-text text-darken-4 margin">{this.state.count}</h1>
                <div className="center">
                  <button className="btn-floating btn-large waves-effect waves-light red margin" onClick={() => this.increment()}>+</button>
                  <button className="btn-floating btn-large waves-effect waves-light red margin" onClick={() => this.decrement()}>-</button>
                </div>
                <div className="center">
                  <form>
                    <input type='number' step="1"
                    onChange={this.handleChange} />
                    </form>
                    <button className="waves-effect waves-light btn red margin" onClick={this.handleAdd} type='submit'>Add!</button>
                    <button className="waves-effect waves-light btn red margin" onClick={this.handleSubstract} type='submit'>Substract!</button>
                </div>
            </div>
        )
    }
}

export default Buttons