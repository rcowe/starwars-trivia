import React, { useState } from 'react';
import EasyQuestions from '/data/easyQuestions';
import RandomAns from '../../data/randomGen';
// import { reload } from 'browser-sync';

/* This Page is for all the easy rated questions */

export default function GameLevel1(props) {
	const [questions, setQuestion] = useState(EasyQuestions);

	const handleChange = e => {
		setQuestion(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setQuestion({
			...questions
		});
	};

	const loadQuestion = () => {};

	return (
		<div className="level1-page">
			<header className="level1-header">
				<h1>Star Wars Trivia</h1>
				<h2>Level 1</h2>
			</header>
			<div className="level1-questions-container">
				<form onSubmit={handleSubmit}>
					<input
						type="submit"
						value="Get New Question"
						onChange={handleChange}
						className="new-question-btn"
					/>
				</form>
				<div className="container">
					<div className="question-container">
						<h1>{questions.question}</h1>
					</div>
					{/*<div>*/}
					{/*	{question[0].question.img && question[0].question.img.length ?*/}
					{/*		*/}
					{/*	}*/}
					{/*</div>*/}
					<div className="score-box">{/*<h2>Score: {score}</h2>*/}</div>
					<div className="answer-btns">
						<button className="option1-btn">{RandomAns()}</button>
						<button className="option2-btn">{RandomAns()}</button>
						<button className="correct-btn">{questions.answer}</button>
						<button className="option3-btn">{RandomAns()}</button>
					</div>
				</div>
			</div>
		</div>

		// 	{Object.keys(currentQuestion).length ? (
		// 		<div className="container">
		// 			<div className="question-container">
		// 				<h1>{question[0].question}</h1>
		// 			</div>
		// 			{/*<div>*/}
		// 			{/*	{question[0].question.img && question[0].question.img.length ?*/}
		// 			{/*		*/}
		// 			{/*	}*/}
		// 			{/*</div>*/}
		// 			<div className="score-box">{/*<h2>Score: {score}</h2>*/}</div>
		// 			<div className="answer-btns">
		// 				<button className="option1-btn">{RandomAns()}</button>
		// 				<button className="option2-btn">{RandomAns()}</button>
		// 				<button className="correct-btn">{question[1].answer}</button>
		// 				<button className="option3-btn">{RandomAns()}</button>
		// 			</div>
		// 		</div>
		// 	) : (
		// 		''
		// 	)}
		// </div>
		// </div>
	);
}
