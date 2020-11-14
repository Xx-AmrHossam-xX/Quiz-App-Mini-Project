import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Container } from 'reactstrap';

//Components
import Intro from './Components/Intro/Intro';
import Exam from './Components/Exam/Exam';
import Fin from './Components/Fin/Fin';

//CSS
import './App.css';

function App (){
	// USE SELECTOR
	const { IntroDisplay, ExamDisplay, FinDisplay } = useSelector(
		state => ({
			IntroDisplay: state.DisplayReducer.IntroDisplay,
			ExamDisplay: state.DisplayReducer.ExamDisplay,
			FinDisplay: state.DisplayReducer.FinDisplay,
			Name: state.NameReducer.Name
		}),
		shallowEqual
	);
	return (
		<Container className="themed-container TopContainer" fluid={true}>
			{IntroDisplay ? <Intro /> : null}
			{ExamDisplay ? <Exam /> : null}
			{FinDisplay ? <Fin /> : null}
		</Container>
	);
}

export default App;
