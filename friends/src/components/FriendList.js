import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

class Friend extends React.Component {
  state = {
    friend: null
  };

  componentDidMount(){
    axios
    .get(`http://localhost:5000/itemById/${this.props.match.params.id}`)
    .then(res => this.setState({ friend: res.data }))
    .catch(err => console.log(err))
  }

  deleteItem = e => {
    e.preventDefault();
    this.props.deleteFriend(this.state.friend.id);
  };

  updateForm = e => {
    e.preventDefault();
    this.props.setUpdateForm(this.state.friend);
  };

  render(){
    const { friend } = this.state;
    if (!this.state.friend) {
      return <h2>Wait for it....</h2>
    }

    return (
      <div className="friend-wrapper">
        {this.props.map(friend => {
          <div key={props.friend.name} className='friend'>
            <h1>{friend.name}</h1>
            <p>{friend.age} years old</p>
            <p>email: {friend.email}</p>
            <p>{friend.weight}ish pounds</p>
            <button onClick={this.deleteItem} className="md-button">
              Delete Friend
            </button>
            <button onClick={this.updateForm} className="md-button">
              Update Friend
            </button>
          </div>
        })}
      </div>
    )
  }


    
      
}



export default Friend;