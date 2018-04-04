import React, {Component} from 'react';
import './App.css';
import './UserOutput/UserOutput.css'

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'junnie'
  }
  changeUsername = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <div className="UserOutput">
          <UserInput changeUsername={this.changeUsername} username={this.state.username}/>
          <UserOutput username={this.state.username}>
            One of the coolest Asian guy that I have met.
          </UserOutput>
        </div>
      </div>
    );
  }
}

export default App;
