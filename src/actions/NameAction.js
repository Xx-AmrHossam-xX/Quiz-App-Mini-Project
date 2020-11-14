import { name } from '../ActionTypes/ActionTypes';

export const NameAction = Name => dispatch => {
	dispatch({
		type: name,
		Name
	});
};
