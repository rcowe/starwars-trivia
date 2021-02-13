import React, { useState } from 'react';
import Questions from '/data/quesdb';
import { Link } from 'react-router-dom';

export default function App(props) {
	const [question, setQuestion] = useState(Questions);


	return (
		<div>
			<h1>Star Wars</h1>

	</div>
)
}

