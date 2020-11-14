import { name } from '../ActionTypes/ActionTypes';

let Default = {
	Name: ''
};

export default function DisplayReducer (state = Default, action){
	switch (action.type) {
		case name:
			return {
				Name: action.Name
			};
		default:
			return state;
	}
}
