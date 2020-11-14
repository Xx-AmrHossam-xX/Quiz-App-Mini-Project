import { questions } from '../ActionTypes/ActionTypes';

let Default = {
	QuestionsArray: []
};

export default function QuestionsReducer (state = Default, action){
	switch (action.type) {
		case questions:
			return {
				QuestionsArray: [ ...action.QuestionsArray ]
			};
		default:
			return state;
	}
}
