import Items from "../components/items";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux'

// {users: [], identity; ""}
const mapStateToProps = (reduxState, ownProps) => {
  return {
    identityProp: reduxState.anyReducer.identity,
    allItems: reduxState.users.map(u => u.item)
  }
}

/*
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUserFn1: addUser
    addUserFn2: () => {dispatch(addUser2())},
    addUser: (username) => {dispatch(addUser(username))}
  }
}*/
// add
export default connect(
  mapStateToProps,
)(Items);




/*
{users: Array(2), anyReducer: {…}}
anyReducer
:
identity
:
"I'm identity"
__proto__
:
Object
users
:
Array(2)
0
:
{name: "serkan", item: "foo"}
1
:
{name: "utku", item: "bar"}
length
:
2
__proto__
:
Array(0)
__proto__
:
Object
*/
