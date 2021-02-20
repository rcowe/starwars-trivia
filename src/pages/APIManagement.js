import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function APIManagement(props) {
	const [questions, setQuestion] = useState([]);
	const idInput = useRef(null);
	const difficultyInput = useRef(null);
	const questionInput = useRef(null);
	const imgLinkInput = useRef(null);
	const answerInput = useRef(null);
	const valueInput = useRef(null);

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

	const handleSubmit = async e => {
		e.preventDefault();
		const idValue = idInput.current.value;
		const difficultyValue = difficultyInput.current.value;
		const questionValue = questionInput.current.value;
		const imgLinkValue = imgLinkInput.current.value;
		const answerValue = answerInput.current.value;
		const valueValue = valueInput.current.value;
		try {
			const response = await fetch(
				'https://api-starwars-trivia-game-seir.herokuapp.com/questions',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						id: idValue,
						difficulty: difficultyValue,
						question: questionValue,
						img: imgLinkValue,
						answer: answerValue,
						value: valueValue
					})
				}
			);
			const data = await response.json();
			setQuestion([...questions, data]);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="Api-mgmt-Page">
			{questions.map(question => {
				return (
					<div key={question.id}>
						<h2>
							<Link to={`/apiManagement/${question.id}`}>
								See Question: {question.id}
							</Link>
						</h2>
						<p>{question.question}</p>
					</div>
				);
			})}
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit}
			>
				<label>
					{' '}
					ID: <input type="text" ref={idInput} />
				</label>
				<label>
					{' '}
					Difficulty: <input type="text" ref={difficultyInput} />
				</label>
				<label>
					{' '}
					Question: <input type="text" ref={questionInput} />
				</label>
				<label>
					{' '}
					Img: <input type="text" ref={imgLinkInput} />
				</label>
				<label>
					{' '}
					Answer: <input type="text" ref={answerInput} />
				</label>
				<label>
					{' '}
					Value: <input type="text" ref={valueInput} />
				</label>
				<input type="submit" value="Update API Data" />
			</form>
		</div>
	);
}
