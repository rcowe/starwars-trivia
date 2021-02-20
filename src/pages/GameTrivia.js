import React, { useState, useEffect } from 'react';
import Container from '../components/GameContainer';

export default function GameTrivia(props) {
	const randomizer = () => {
		let rdm = Math.floor(Math.random() * 31);
		return rdm;
	};

	const [query, updateQuery] = useState({
		baseURL: 'https://api-starwars-trivia-game-seir.herokuapp.com/questions/',
		random: '',
		searchURL: ''
	});

	const [currentQuestion, updateQuestion] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(query.searchURL);
				const data = await response.json();
				console.log(data);
				await updateQuestion(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [query]);

	const handleChange = e => {
		updateQuery({
			...currentQuestion,
			...{
				[e.target.id]: e.target.value
			}
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		updateQuery({
			...query,
			searchURL: query.baseURL + randomizer()
		});
	};

	//score
	const [score, updateScore] = useState(0);

	const incrementScore = e => updateScore(score + currentQuestion.value);

	const decrementScore = e =>
		score === 0 ? updateScore(0) : updateScore(score - currentQuestion.value);

	return (
		<div className="TriviaPage">
			<header className="level1-header">
				<h1>Star Wars Trivia</h1>
				<h2>Score: {score}</h2>
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
						{Object.keys(currentQuestion).length ? (
							<Container
								key={`${currentQuestion.id}`}
								currentQuestion={currentQuestion}
								score={score}
								updateScore={updateScore}
								incrementScore={incrementScore}
								decrementScore={decrementScore}
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
