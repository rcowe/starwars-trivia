import React, { useState } from 'react';
import RandomAns from '/data/randomGen';

export default function GameContainer({
	currentQuestion,
	decrementScore,
	incrementScore
}) {
	//
	// // Need a button in game container that will toggle to OFF and not show anything
	// 	// Then when button is clicked it will show current question card
	// 	// Need to add logic for when user gets questions right, score is updated

	return (
		<div className="container" key={`${currentQuestion.id}`}>
			<div className="question-container">
				<h1>{currentQuestion.question}</h1>
			</div>
			<div>
				{currentQuestion.img && currentQuestion.img.length ? (
					<div>
						{' '}
						<img src={`${currentQuestion.img}`} />{' '}
					</div>
				) : (
					''
				)}
				{/*{(currentQuestion.img && currentQuestion.img.length) ? <div>{currentQuestion.img}<div> : '' }*/}
			</div>
			<div className="score-box">{/*<h2>Score: {score}</h2>*/}</div>
			<div className="answer-btns">
				<button type="button" className="option1-btn" onClick={decrementScore}>
					{RandomAns()}
				</button>
				<button type="button" className="option2-btn">
					{RandomAns()}
				</button>
				<button type="button" className="correct-btn" onClick={incrementScore}>
					{currentQuestion.answer}
				</button>
				<button type="button" className="option3-btn">
					{RandomAns()}
				</button>
			</div>
		</div>
	);
}
