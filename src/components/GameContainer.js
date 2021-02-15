import React, { useState } from 'react';
import RandomAns from '/data/randomGen';

export default function GameContainer({ question, setQuestion }) {

// Need a button in game container that will toggle to OFF and not show anything
	// Then when button is clicked it will show current question card

	const [score, updateScore] = useState(0);

	const incrementScore = () =>
		updateScore(score + props.currentQuestion[0].value);
	//
	// const decrementScore = () =>
	// 	score === 0
	// 		? updateScore(0)
	// 		: updateScore(score - props.currentQuestion[0].value);
	// Need to add logic for when user gets questions right, score is updated
	return (

		<div className="container">
			<div className="question-container">
				<h1>{question[1].question}</h1>
			</div>
			<div>
				{question[1].question.img && question[1].question.img.length ?

				}
			</div>
			<div className="score-box">{/*<h2>Score: {score}</h2>*/}</div>
			<div className="answer-btns">
				<button className="option1-btn">{RandomAns()}</button>
				<button className="option2-btn">{RandomAns()}</button>
				<button className="correct-btn">{question[1].answer}</button>
				<button className="option3-btn">{RandomAns()}</button>
			</div>
		</div>
	);
}
