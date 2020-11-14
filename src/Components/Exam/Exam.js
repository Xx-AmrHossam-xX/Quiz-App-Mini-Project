import React, { useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
//ACTIONS
import { DisplayExamAction, DisplayFinAction } from '../../actions/DisplayActions';
import { AnswersAction } from '../../actions/AnswersAction';
//CSS
import './Exam.css';

function Exam (){
	// VARIABLES
	const [ Index, SetIndex ] = useState(0);
	// USE SELECTOR
	const { QuestionsArray } = useSelector(
		state => ({
			QuestionsArray: state.QuestionsReducer.QuestionsArray
		}),
		shallowEqual
	);
	// DISPATCH
	const dispatch = useDispatch();
	//FUNCTIONS
	const Select = item => {
		//If the answer is correct increment the state in the store
		if (item === QuestionsArray[Index].Answer) {
			dispatch(AnswersAction());
		}
		if (Index < 4) {
			//If there are still items in the array continue to the next one
			SetIndex(prev => prev + 1);
		} else {
			//Hide and display components
			dispatch(DisplayFinAction(true));
			dispatch(DisplayExamAction(false));
		}
	};
	return (
		<div>
			<h3 className="mb-5">{QuestionsArray[Index].Question}</h3>
			<div>
				{QuestionsArray[Index].AnswersArray.map((item, key) => (
					<Button color="primary" size="lg" block onClick={() => Select(item)} key={key}>
						{item}
					</Button>
				))}
			</div>
		</div>
	);
}
export default Exam;
