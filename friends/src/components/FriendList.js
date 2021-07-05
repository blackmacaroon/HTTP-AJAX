import React from 'react';


function FriendList(props) {
  function routeToFriend(e, friend) {
    e.preventDefault();
    props.history.push(`/friend-list/${friend.id}`)
    props.getItemById(friend.id)
  }

  return (
    <div className='friend-wrapper'>
      <div className='friend-link'>
        {props.friends.map(friend => (
          <div 
            onClick={e => routeToFriend(e, friend)}
            key={friend.id} 
            className='friend'>
            <h2>{friend.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );    
}

export default FriendList;