import React from 'react';

function Home(props) {
  const routeToFriends = event => {
    event.preventDefault();
    props.history.push('/friend-list');
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://unsplash.com/photos/3Xd5j9-drDA"
        alt=""
      />
      <button onClick={routeToFriends} className="md-button">
        Look at all my friends!
      </button>
    </div>
  );
}

export default Home;