import React from 'react';

function Home(props) {
  const routeToFriends = event => {
    event.preventDefault();
    props.history.push('/friends');
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt=""
      />
      <button onClick={routeToFriends} className="md-button">
        Look at all my friends!
      </button>
    </div>
  );
}

export default Home;