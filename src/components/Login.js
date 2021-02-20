import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function APIManagement(props) {
	const [question, setQuestion] = useState({});
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					'https://api-starwars-trivia-game-seir.herokuapp.com/questions'
				);
				const data = await response.json();
				setQuestion(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="LoginPage">
			<div className="page-title">
				<h2>See All API Questions, Create, Update and Delete </h2>
			</div>
			<div>
				<h3>{question.id ? question.id : ''}</h3>
				<h3>{question.question ? question.question : ''}</h3>
				<h3>{question.answer ? question.answer : ''}</h3>
				<Link to={`/login/${question._id}/edit`}>
					<button>Update this Question</button>
				</Link>
			</div>
		</div>
	);
}
