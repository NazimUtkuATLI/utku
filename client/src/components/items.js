import React from 'react';


class Items extends React.Component{
  render(){
    return(
        <div>
          Hello items <br />
          {this.props.allItems} <br />
          {this.props.identityProp}
        </div>
    )
  }
}


export default Items;
