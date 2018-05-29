export const ADD_USER_ILKAY = "ADD_USER_ILKAY";
export const ADD_USER_MUSTAFA = "ADD_USER_MUSTAFA";
export const ADD_USER = "ADD_USER";
export const CHANGE_NAME = "CHANGE_NAME";
export const DELETE = "DELETE";

export function addUser1(username) {
	return {type: ADD_USER_ILKAY, payload: {name: "ilkay"}}
}
export function addUser2(username) {
	return {type: ADD_USER_MUSTAFA, payload: {name: "Mustafa"}}
}


export function addUser(username) {
	return {type: ADD_USER, payload: {name: username}}
}

export function changeName(username, ind) {
	return {type: CHANGE_NAME, payload: {name: username, ind}}
}


export function deleteUser(ind) {
	return {type: DELETE, payload: {ind}}
}
