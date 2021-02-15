import React, { useState } from 'react';
import EasyQuestions from '/data/easyQuestions';
import Container from '../components/GameContainer';

/* This Page is for all the easy rated questions */

export default function GameLevel1(props) {
	const [question, setQuestion] = useState(EasyQuestions);

	return (
		<div className="level1-page">
			<header className="level1-header">
				<h1>Star Wars Trivia</h1>
				<h2>Level 1</h2>
			</header>
			<div className="level1-questions-container"></div>
			{Object.keys(question).length ? (
				<Container question={question} setQuestion={setQuestion} />
			) : (
				''
			)}
		</div>
	);
}
