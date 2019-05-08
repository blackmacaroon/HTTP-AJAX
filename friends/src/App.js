import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import FriendsList from './components/friendsList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  render() {
    return (
      <div className='App'>
        <FriendsList />
      </div>
    );
  }
    
}

export default App;
