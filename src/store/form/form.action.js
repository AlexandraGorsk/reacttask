export const ADD_USER = 'ADD_USER';

export const DELETE_USER = 'DELETE_USER';

export const addUser = (userData) => ({
	type: ADD_USER,
	payload: userData,
});
export const deleteUser = (UserId) => ({
	type: DELETE_USER,
	payload: UserId,
});
