import React from 'react';
import './App.css';
import {
  Route,
  NavLink
} from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import Friend from './components/Friend';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

const blankFriend = {
  name: '',
  age: null,
  email: '',
  weight: null
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeFriend: null,
      editingFriendId: null,
      isEditing: false,
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
      .then(res => this.setState({ activeFriend: res.data }))
      .catch(err => console.log(err));
  }

  changeHandler = e => {
    this.setState({
      friend: {
        ...this.state.friend,
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
        this.props.history.push('/friend-list');
        console.log('add friend res', res)
      })
      .catch(err => console.log(err));
  }

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/friend-list');
        console.log('byebye', res)
      })
      .catch(err => console.log(err));
  };

  updateFriend = () => {
    axios
      .put(
        `http://localhost:5000/friends/${this.state.editingId}`,
        this.state.friend
      )
      .then(res => {
        this.setState({
          friends: res.data,
          editingId: null,
          isEditing: false,
          friend: blankFriend
        });
        console.log('updated friend', res)
      })
      .catch(error => console.log(error));
  };

  setUpUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({
      friend, // same as friend: friend,
      isEditing: true,
      editingId: friend.id
    });
  };
 
  render() {
    return (
      <div className='App'>
        <nav>
          <h1>Kayla's Best Friends</h1>
          <div className="nav-links">
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/friend-form'>{this.setState.isEditing ? 'Update Friend' : 'Add Friend'}</NavLink>
            <NavLink to='/friend-list'>Friends</NavLink>
          </div>
        </nav>
        <Route exact path='/' component={Home} />
        <Route exact path='/friend-list'
          render={props => (
            <FriendList
              {...props}
              friends={this.state.friends}
              getItemById={this.getItemById} 
            />
          )}
        >
        </Route>
        <Route path='/friend-list/:id'
          render={props => (
            <Friend 
              {...props}
              friends={this.state.friends}
              deleteFriend={this.deleteFriend}
              friend={this.state.activeFriend}
              updateFriend={this.setUpUpdateForm}
            />
          )} 
        >
        </Route>
        <Route path='/friend-form'
          render={props => (
            <FriendForm 
              {...props}
              activeFriend={this.state.activeItem} 
              addFriend={this.addFriend}
              updateFriend={this.updateFriend}
            />
          )} 
        >
        </Route>
      </div>
    );
  }   
}

export default App;
