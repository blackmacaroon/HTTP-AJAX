import React from 'react';
import './App.css';
import friendsData from './components/friendsData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: friendsData
    };
  }

  FriendsList() {
    return (
      <div>
        {this.state.friends.map(friend => {

        })}
      </div>
    )
  }


  render() {
    return (
      <div className='App'>
        
      </div>
    );
  }
    
}

export default App;
