import React from 'react';

FriendData(props) {
      console.log(this.props)
      return (
        <div>
          {this.props.map(friend => {
            <div key={props.name} className='friend'>
              <h1>{props.name}</h1>
              <p>{props.age} years old</p>
              <p>email: {props.email}</p>
            </div>
          })}
        </div>
      )
    }



export default FriendData;