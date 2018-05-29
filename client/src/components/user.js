import React from 'react';
import Items from "../containers/itemsContainer";

class User extends React.Component{
  render(){
    return(
        <div>
          Hello {this.props.name} !
          <Items />
        </div>
    )
  }
}


export default User;
