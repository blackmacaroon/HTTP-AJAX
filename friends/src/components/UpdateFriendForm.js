import React from 'react';

class UpdateFriendForm extends React.Component {
      state = {
            friends: this.props.activeFriend
      }

      handleChange = e => {
            e.persist();
            this.setState({
                  friends: {
                        ...this.state.friends,
                        [e.target.name]: e.target.value
                  }
            })
      }

      handleSubmit = e => {
            // console.log('submit state', this.state)
            e.preventDefault();
            this.props.updateFriend(this.state.friends)
      }


      render(){
            return (
                  <div className='formContainer'>
                        <h1>Update Friend</h1>
                        <form onSubmit={this.handleSubmit} className='form'>
                              <input
                                    type='text'
                                    name='name'
                                    onChange={this.handleChange}
                                    placeholder='name'
                                    value={this.state.friends.name}
                              >
                              </input>
                              <input
                                    type='number'
                                    name='age'
                                    onChange={this.handleChange}
                                    placeholder='age'
                                    value={this.state.friends.age}
                              >
                              </input>
                              <input
                                    type='text'
                                    name='email'
                                    onChange={this.handleChange}
                                    placeholder='email'
                                    value={this.state.friends.email}
                              >
                              </input>
                              <input
                                    type='number'
                                    name='weight'
                                    onChange={this.handleChange}
                                    placeholder='weight'
                                    value={this.state.friends.weight}
                              >
                              </input>
                              <button className="buttForm">Update Friend</button>
                        </form>

                  </div>
            )
      }



}




export default UpdateFriendForm