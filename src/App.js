import { Component } from "react";
import Buttons from "./Buttons"

class App extends Component {
  state = {
    count: 0
  }

increment= (e) => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = (e) => {
    this.setState({
      count: this.state.count - 1
    });
  }


  render(){
  return (
    <div className="App">
    <h1>{this.state.count}</h1>
    <button onClick={this.state.increment}>+</button>
    <button onClick={this.state.decrement}>-</button>
    </div>
  );
}
}

export default App;
