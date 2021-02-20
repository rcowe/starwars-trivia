import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SingleQuestion(props) {
	const [question, setQuestion] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/apiManagement/${props.match.params.id}`);
				const data = await response.json();
				setQuestion(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div>
			<h2>{question.id ? question.id : ''}</h2>
			<h2>{question.difficulty ? question.difficulty : ''}</h2>
			<h2>{question.question ? question.question : ''}</h2>
			<h2>{question.img ? question.img : ''}</h2>
			<h2>{question.answer ? question.answer : ''}</h2>
			<h2>{question.value ? question.value : ''}</h2>
			<Link to={`/apiManagement/${question.id}/edit`}>
				<button>Update this API Question</button>
			</Link>
		</div>
	);
}
