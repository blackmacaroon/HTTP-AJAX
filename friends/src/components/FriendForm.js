import React from 'react';

class NewFriendForm extends React.Component {
      constructor(props){
            super(props)
            this.state = {
                  friend: {
                        name: '',
                        age: '',
                        email: '',
                        weight: '',
                  }
            };
      // console.log(props);
      }

      handleChange = e => {
            e.persist();
            // let value = e.target.value;
            // if (e.target.value ===  'age' || e.target.value === 'weight')

            this.setState(prevState => ({
                  friend: {
                        ...prevState.friend,
                        [e.target.name]: e.target.value
                  }
            }))
      }

      handleSubmit = e => {
            if (this.props.activeItem) {
                  this.props.updateItem(e, this.state.friend);
            } else {
                  this.props.addFriend(this.state.friend)
            }
            this.setState({
                  friend: {
                        name: '',
                        age: '',
                        email: '',
                        weight: '',
                  }
            })
      }


      render(){
            return (
                  <div className='formContainer'>
                        <h2>{`${this.props.activeFriend ? 'Update' : 'Add New'} Friend`}</h2>
                        <form onSubmit={this.handleSubmit} className='form'>
                              <input
                                    type='text'
                                    name='name'
                                    onChange={this.handleChange}
                                    placeholder='name'
                                    value={this.state.friend.name}
                              >
                              </input>
                              <div className="baseline" />
                              <input
                                    type='number'
                                    name='age'
                                    onChange={this.handleChange}
                                    placeholder='age'
                                    value={this.state.friend.age}
                              >
                              </input>
                              <div className="baseline" />
                              <input
                                    type='text'
                                    name='email'
                                    onChange={this.handleChange}
                                    placeholder='email'
                                    value={this.state.friend.email}
                              >
                              </input>
                              <div className="baseline" />
                              <input
                                    type='number'
                                    name='weight'
                                    onChange={this.handleChange}
                                    placeholder='weight'
                                    value={this.state.friend.weight}
                              >
                              </input>
                              <div className="baseline" />
                              <button className="md-button">{`${this.props.activeFriend ? 'Update' : 'Add New'} Friend`}</button>
                        </form>
                  </div>
            );
      }
}




export default NewFriendForm

