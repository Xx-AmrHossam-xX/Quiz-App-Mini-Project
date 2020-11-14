import { display_intro, display_exam, display_fin } from '../ActionTypes/ActionTypes';

let Default = {
	IntroDisplay: true,
	ExamDisplay: false,
	FinDisplay: false
};

export default function DisplayReducer (state = Default, action){
	switch (action.type) {
		case display_intro:
			return {
				...state,
				IntroDisplay: action.Status
			};
		case display_exam:
			return {
				...state,
				ExamDisplay: action.Status
			};
		case display_fin:
			return {
				...state,
				FinDisplay: action.Status
			};
		default:
			return state;
	}
}
