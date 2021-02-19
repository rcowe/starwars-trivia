import React from 'react';

export default function Preview(props) {
	const text = props.text.split('');

	return (
		<div className="border rounded p-3 mb-4">
			{text.map((letter, index) => {
				let color;
				if (index < props.userInput.length) {
					color = letter === props.userInput[index] ? '#7FFFD4' : '#A52A2A';
				}
				return (
					<span key={index} style={{ backgroundColor: color }}>
						{letter}
					</span>
				);
			})}
		</div>
	);
}
