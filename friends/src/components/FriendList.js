import React from 'react';

function FriendList(props) {
  function routeToFriend(e, friend) {
    e.preventDefault();
    props.history.push(`/friend-list/${friend.id}`)
    props.getItemById(friend.id)
  }

  return (
    <div className="friends-wrapper">
      {props.friends.map(friend => {
        <div 
          onCLick={e => routeToFriend(e, friend)}
          key={friend.id} 
          className='friend'>
          <h1>{friend.name}</h1>
        </div>
      })}
    </div>
  );    
}

export default FriendList;