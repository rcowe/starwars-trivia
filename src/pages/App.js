import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function App(props) {
	const [question, setQuestion] = useState();

	return (
		<div>
			<h1>Star Wars</h1>
			<p>Testing the font</p>
		</div>
	);
}
