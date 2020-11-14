import { combineReducers } from 'redux';
import DisplayReducer from './DisplayReducer';
import NameReducer from './NameReducer';
import QuestionsReducer from './QuestionsReducer';
import AnswersReducer from './AnswersReducer';
export default combineReducers({
	DisplayReducer,
	NameReducer,
	QuestionsReducer,
	AnswersReducer
});
