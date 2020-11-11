import { Component } from "react";
import Buttons from "./Buttons"

class App extends Component {
  constructor(props){
    super (props);
  this.state = {
    count: 0
  }
}

increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }


  render(){
  return (
    <div className="App">
    <h1>{this.state.count}</h1>
    <button onClick={() => this.increment()}>+</button>
    <button onClick={() => this.decrement()}>-</button>
    </div>
  );
}
}

export default App;
