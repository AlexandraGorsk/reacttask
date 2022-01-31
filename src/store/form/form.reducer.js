import { ADD_USER, DELETE_USER } from './form.action';
import { v4 as uuidv4 } from 'uuid';
export const defaultState = {
	userList: JSON.parse(localStorage.getItem('userList')) || [],
};
export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				userList: state.userList.concat({
					...action.payload,
					id: uuidv4(),
				}),
			};
		case DELETE_USER:
			return {
				...state,
				userList: state.userList.filter((user) => user.id !== action.payload),
			};
		default:
			return state;
	}
};
