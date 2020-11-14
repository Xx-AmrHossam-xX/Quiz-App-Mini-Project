import { increment_correct_answers } from '../ActionTypes/ActionTypes';

let Default = {
	NoOfCorrectAnswers: 0
};

export default function QuestionsReducer (state = Default, action){
	switch (action.type) {
		case increment_correct_answers:
			return {
				NoOfCorrectAnswers: state.NoOfCorrectAnswers + 1
			};
		default:
			return state;
	}
}
