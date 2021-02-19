import React, { useState, Component } from 'react';
import Preview from '../components/Preview';
import Speed from '../components/Speed';
import OpenCrawls from '/data/OpenCrawls';
const initialState = {
	text: OpenCrawls(),
	userInput: '',
	letters: 0,
	seconds: 0,
	started: false,
	finished: false
};

class HowFastCanUType extends Component {
	state = initialState;

	onRestart = () => {
		this.setState(initialState);
	};

	onUserInputChange = e => {
		const value = e.target.value;
		this.setTimer();
		this.onFinished(value);
		this.setState({
			userInput: value,
			letters: this.countRightLetters(value)
		});
	};

	onFinished(userInput) {
		if (userInput === this.state.text) {
			clearInterval(this.interval);
			this.setState({
				finished: true
			});
		}
	}

	countRightLetters(userInput) {
		const text = this.state.text.replace(' ', '');
		return userInput
			.replace(' ', '')
			.split('')
			.filter((letter, index) => letter === text[index]).length;
	}

	setTimer() {
		if (!this.state.started) {
			this.setState({ started: true });
			this.interval = setInterval(() => {
				this.setState(prevProps => {
					return { seconds: prevProps.seconds + 1 };
				});
			}, 1000);
		}
	}

	render() {
		return (
			<div className="container mt-5 mb-5">
				<div className="row">
					<div className="col-md-6 offset-md-3">
						<Preview text={this.state.text} userInput={this.state.userInput} />
						<textarea
							value={this.state.userInput}
							onChange={this.onUserInputChange}
							className="form-control mb-3"
							placeholder="Start Typing Here..."
						></textarea>
						<Speed letters={this.state.letters} seconds={this.state.seconds} />
						<div className="text-right">
							<button className="btn btn-light" onClick={this.onRestart}>
								Restart
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HowFastCanUType;
