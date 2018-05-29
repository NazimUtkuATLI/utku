import React from 'react';
import User from './user';

class Users extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    }
  }

  render(){
    return(
        <div>
          {this.props.componentUsers.map((user, ind) =>
            <div>
              <User key={ind} name={user.name}/>
              <button onClick={() => {this.props.changeName("mahmut", ind)}}> Change name </button>
              <button onClick={() => {this.props.deleteUser(ind)}}> Delete user </button></div>)}
              <button onClick={this.props.addUserFn1}>Add user1</button>
              <button onClick={this.props.addUserFn2}>Add user2</button>
              <button onClick={() => {this.props.addUser(this.state.username)}}>Add user</button>
              <input type="text" placeholder="username" value={this.state.username} onChange={(e) => {this.setState({username: e.target.value})}}/>
            </div>
    )
  }
}


export default Users;
