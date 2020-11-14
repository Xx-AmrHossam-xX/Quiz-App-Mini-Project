import { increment_correct_answers } from '../ActionTypes/ActionTypes';

export const AnswersAction = () => dispatch => {
	dispatch({
		type: increment_correct_answers
	});
};
