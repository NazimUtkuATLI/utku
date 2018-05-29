import {ADD_USER_ILKAY,ADD_USER_MUSTAFA, ADD_USER, CHANGE_NAME, DELETE} from "../actions/users";
//state,action => state
const initialState = [{name: "serkan", item: "foo"}, {name: "utku", item: "bar"}]

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_USER_ILKAY:
			return [...state, action.payload];
		case ADD_USER_MUSTAFA:
			return [...state, action.payload];

		case ADD_USER:
			return [...state, action.payload];
		case CHANGE_NAME:
			const ind =  action.payload.ind;
			return [...state.slice(0, ind), {name: action.payload.name}, ...state.slice(ind+1)]
		case DELETE:
			return [...state.slice(0,  action.payload.ind), ...state.slice( action.payload.ind+1)]
		default:
			return state;
	}
}
//
