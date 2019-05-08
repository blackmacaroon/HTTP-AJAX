import React from 'react';
import './App.css';
import axios from 'axios';
import NewFriendForm from './components/NewFriendForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      console.log('response data', response.data);
      this.setState({ friends: response.data })
    })
    .catch(err => {
      console.log(err);
    });
  }
 
  render() {
    return (
      <div className='App'>
        { this.state.friends.map(friend => 
        <div>
          <h1>{friend.name}</h1>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
          <button>X</button>
        </div>
        )}
        <NewFriendForm friend={this.state.friends}/>
      </div>
    );
  }
    
}

export default App;
