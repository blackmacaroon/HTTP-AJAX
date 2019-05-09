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

  addFriend = newFriend => {
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res)
      })
      .catch(err => console.log(err));
  }
  
  updateFriend = id => {
    axios
    .put(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState({ friends: res.data})
    .catch(err => console.log(err));
    })
  }

  deleteFriend = id => {
    axios
      .put(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data})
      .catch(err => console.log(err));
    })
  };
 
  render() {
    return (
      <div className='App'>
        { this.state.friends.map(friend => 
        <div>
          <h1>{friend.name}</h1>
            <p>{friend.age} years old</p>
            <p>email: {friend.email}</p>
            <p>{friend.weight}ish pounds</p>
            <button onClick={this.updateFriend} className="md-button">
              Update Friend
            </button>
            <button onClick={this.deleteFriend} className="md-button">
              Remove Friend
            </button>
        </div>
        )}
        <NewFriendForm friend={this.state.friends} addFriend={this.addFriend}/>
      </div>
    );
  }
    
}

export default App;
