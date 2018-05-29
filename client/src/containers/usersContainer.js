import Users from "../components/users";
import {connect} from "react-redux";
import {addUser1,addUser2, addUser, changeName,deleteUser} from "../actions/users";
import { bindActionCreators } from 'redux'

const mapStateToProps = (reduxState, ownProps) => {
  return {
    componentUsers: reduxState.users
  }
}

//store.dispatch
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    addUserFn1: addUser1,
    addUserFn2: addUser2,
    addUser,
    changeName,
    deleteUser
  }, dispatch)
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
  mapDispatchToProps
)(Users);
