import React from 'react';

export default function Speed(props) {
	if (props.letters !== 0 && props.seconds !== 0) {
		const wpm = props.letters / 5 / (props.seconds / 60);
		return <div>{Math.round(wpm)} wpm</div>;
	}

	return null;
}
