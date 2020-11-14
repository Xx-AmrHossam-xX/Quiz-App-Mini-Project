import { questions } from '../ActionTypes/ActionTypes';

export const QuestionsAction = QuestionsArray => dispatch => {
	dispatch({
		type: questions,
		QuestionsArray: [ ...QuestionsArray ]
	});
};
