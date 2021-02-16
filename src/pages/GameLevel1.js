import React, { useState, useEffect } from 'react';
import Container from '../components/GameContainer';

export default function GameLevel1(props) {
	const randomizer = () => {
		let rdm = Math.floor(Math.random() * 31);
		return rdm;
	};

	const [query, updateQuery] = useState({
		baseURL: 'https://api-starwars-trivia-game-seir.herokuapp.com/questions/',
		random: randomizer(),
		searchURL: ''
	});

	const [currentQuestion, updateQuestion] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(query.searchURL);
				const data = await response.json();
				await updateQuestion(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [query]);

	const handleChange = e => {
		updateQuery({
			...query,
			...{
				[e.target.id]: e.target.value
			}
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseURL + query.random
		});
	};

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
						{/*{currentQuestion.map(question => {*/}
						{/*	return (*/}
						{/*		<Container*/}
						{/*			key={`${question.id}`}*/}
						{/*			currentQuestion={currentQuestion}*/}
						{/*		/>*/}
						{/*	);*/}
						{/*})}*/}
						{Object.keys(currentQuestion).length ? (
							<Container
								key={`${questions.id}`}
								currentQuestion={currentQuestion}
							/>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
