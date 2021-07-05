import React from 'react';
// import { Route, NavLink } from 'react-router-dom';
// import axios from 'axios';

function Friend ({ friend, deleteFriend, history, updateFriend }) {
      // const friend = props.friends.find(
      //       thing => `${thing.id` === props.match.params.id
      // );
      // if (!friend) {
      //       console.log(friend)
      //       return <h2>Wait for it....</h2>;
      // }

      return (
            <div className='friend-wrap'>
                  <div className='friend-head'>
                        <h3>{friend.name}</h3>
                  </div>
                  <div className='friend-stats'>
                        <p>{friend.age} years old</p>
                        <p>email: {friend.email}</p>
                        <p>{friend.weight}ish pounds</p>
                  </div>
                  <button 
                        onClick={e => {
                              updateFriend(e, friend);
                              history.push('/friend-form')
                        }} 
                        className="md-button">
                              Update Friend
                  </button>
                  <button 
                        onClick={e => {
                              deleteFriend(e, friend.id);
                              history.push('/friend-list');
                        }} 
                        className="md-button">
                              Delete Friend
                  </button>
                  

            </div>
      )

}
export default Friend