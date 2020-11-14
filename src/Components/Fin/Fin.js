import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Badge } from 'reactstrap';
//CSS
import './Fin.css';

function Fin (){
	// USE SELECTOR
	const { Name, NoOfCorrectAnswers } = useSelector(
		state => ({
			Name: state.NameReducer.Name,
			NoOfCorrectAnswers: state.AnswersReducer.NoOfCorrectAnswers
		}),
		shallowEqual
	);
	return (
		<div className="bg-danger p-5 FinTopContainer">
			<h2 className="text-center mb-4">Result</h2>
			<h3>Name : {Name}</h3>
			<h3>
				Number of Correct Answers : <Badge color="success">{NoOfCorrectAnswers}</Badge>
			</h3>
		</div>
	);
}
export default Fin;
