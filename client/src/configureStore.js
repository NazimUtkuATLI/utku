import {createStore} from "redux";
import mainReducer from "./reducers"; //import mainReducer from "./reducers/index";

export default function () {
  return createStore(mainReducer);
}
