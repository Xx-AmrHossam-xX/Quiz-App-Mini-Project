import React, { useState } from 'react';
import { Button, Form, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';

//ACTIONS
import { DisplayIntroAction, DisplayExamAction } from '../../actions/DisplayActions';
import { NameAction } from '../../actions/NameAction';
import { QuestionsAction } from '../../actions/QuestionsAction';
//UTILITIES
import { DataSetA, DataSetB, DataSetC, DataSetD, DataSetE } from '../../Utilities/Constants';
import shuffle from '../../Utilities/shuffle';
//CSS
import './Intro.css';

function Intro (){
	//VARIABLES
	const [ NameVal, SetNameVal ] = useState('');
	const DataArray = [ DataSetA, DataSetB, DataSetC, DataSetD, DataSetE ];
	// DISPATCH
	const dispatch = useDispatch();
	//FUNCTIONS
	const InputChange = e => {
		SetNameVal(e.target.value);
	};
	//This function checks if the input is just white spaces then shuffles
	//each Set of data then shuffles their respective answer arrays then stores the
	//final Aarray then hides and shows the proper elements
	const Submit = e => {
		if (/\S/.test(NameVal)) {
			dispatch(NameAction(NameVal));
			shuffle(DataArray);
			DataArray.map(item => shuffle(item.AnswersArray));
			dispatch(QuestionsAction(DataArray));
			dispatch(DisplayExamAction(true));
			dispatch(DisplayIntroAction(false));
		}
	};

	return (
		<Form>
			<Input type="text" placeholder="Please enter your name" onChange={InputChange} />
			<Button onClick={Submit} color="secondary" className="ml-auto mr-auto d-block mt-4">
				Submit
			</Button>
		</Form>
	);
}
export default Intro;
