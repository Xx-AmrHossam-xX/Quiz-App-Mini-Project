import { display_intro, display_exam, display_fin } from '../ActionTypes/ActionTypes';

export const DisplayIntroAction = Status => dispatch => {
	dispatch({
		type: display_intro,
		Status
	});
};

export const DisplayExamAction = Status => dispatch => {
	dispatch({
		type: display_exam,
		Status
	});
};

export const DisplayFinAction = Status => dispatch => {
	dispatch({
		type: display_fin,
		Status
	});
};
