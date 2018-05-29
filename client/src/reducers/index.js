
import users from "./users";
import anyReducer from "./identity";
import { combineReducers} from "redux";

export default combineReducers({users, anyReducer})
//export default combineReducers({users: users, anyReducer : anyReducer})
