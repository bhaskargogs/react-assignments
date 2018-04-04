import React, {Component} from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    input: ''
  }

  inputChangeHandler = (event) => {
    this.setState({input: event.target.value});
  }

  deleteChar = (index) => {
    const text = this
      .state
      .input
      .split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({input: updatedText});
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.inputChangeHandler} value={this.state.input}/>
        <p>{this.state.input}</p>
        <Validation length ={this.state.input.length}/> {this
          .state
          .input
          .split('')
          .map((ch, index) => {
            return <Char char={ch} key={index} click={() => this.deleteChar(index)}/>
          })}
      </div>
    );
  }
}

export default App;
