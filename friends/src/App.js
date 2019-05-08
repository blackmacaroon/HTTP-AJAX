import React from 'react';
import './App.css';
import axios from 'axios';
import FriendData from './components/FriendData';

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
      this.setState({ error: err.response.message })
    });
  }
 
  render() {
    return (
      <div className='App'>
        <FriendData friends={friends}/>
      </div>
    );
  }
    
}

export default App;
