import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';
import axios from 'axios';

import FriendList from './components/FriendList';
import NewFriendForm from './components/NewFriendForm';
import UpdateFriendForm from './components/UpdateFriendForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: null,
      friends: [],
      error: ''
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      // console.log('response data', res.data);
      this.setState({ friends: res.data })
    })
    .catch(err => console.log(err));
  }

  getItemById = id => {
    axios
      .get(`http://localhost:5000/itemById/${id}`)
      .then(res => this.setState({ activeItem: res.data }))
      .catch(err => console.log(err));
  }

  changeHandler = e => {
    this.setState({
      friends: {
        ...this.state.friends,
        [e.target.name]: e.target.value
      }
    })
  }

  addFriend = (e, newFriend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({ friends: res.data });
        // console.log('add friend res', res)
      })
      .catch(err => console.log(err));
  }
  
  updateFriend = updatedFriend => {
    axios
    .put(`http://localhost:5000/friends/${updatedFriend.id}`)
    .then(res => {
      this.setState({ friends: res.data})
      console.log('update friend res', res)
    .catch(err => console.log(err));
    })
  }

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data})
        console.log('byebye', res)
      .catch(err => console.log(err));
    })
  };
 
  render() {
    return (
      <div className='App'>
        { this.state.friends.map(friend => 
          <nav>
            <h1>Kayla's Best Friends</h1>
            <div className="nav-links">
              <NavLink exact to='/'>Home</NavLink>
              <NavLink to='/friend-form'>Add Friend</NavLink>
              <NavLink to='/friend-list'>Friends</NavLink>
    
              {/* <h1>{friend.name}</h1>
                <p>{friend.age} years old</p>
                <p>email: {friend.email}</p>
                <p>{friend.weight}ish pounds</p>
                <button onClick={this.updateFriend} className="md-button">
                  Update Friend
                </button>
                <button onClick={this.deleteFriend} className="md-button">
                  Remove Friend
                </button> */}
            </div>
          </nav>
          <Route exact path='/' component={Home}/>
          <Route exact path='/friend-list'
            render={props => (
              <FriendList
                {...props}
                friends={this.state.friends} />
            )}
          >
          </Route>
          <Route path='/friend-form'
            render={props => (
              <NewFriendForm 
                {...props}
                friends={this.state.friends} 
                addFriend={this.addFriend}
              />
            )} 
          >
          </Route>
        )}
      </div>
    );
  }
    
}

export default App;
