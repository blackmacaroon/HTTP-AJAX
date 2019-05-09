import React from 'react';

class NewFriendForm extends React.Component {
      constructor(props){
            super(props)
            this.state = {
                  friends: {
                        name: '',
                        age: null,
                        email: '',
                        weight: null,
                  }
            };
      console.log(props);
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
            console.log('submit state', this.state)
            e.preventDefault();
            this.props.addFriend(this.state.friends)
      }


      render(){
            return (
                  <div className='formContainer'>
                        <h1>Add New Friend</h1>
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
                              <button className="buttForm">Add Friend</button>
                        </form>

                  </div>
            )
      }



}




export default NewFriendForm

