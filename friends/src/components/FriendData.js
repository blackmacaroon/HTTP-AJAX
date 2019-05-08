import React from 'react';

const FriendData = (props) => {
      console.log('friend data', props)
      return (
        <div>
          {this.props.map(friend => {
            <div key={props.friend.name} className='friend'>
              <h1>{friend.name}</h1>
              <p>{friend.age} years old</p>
              <p>email: {friend.email}</p>
            </div>
          })}
        </div>
      )
    }



export default FriendData;