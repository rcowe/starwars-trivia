const { Schema, model } = require('mongoose');

const quesSchema = new Schema({
	id: String,
	difficulty: String,
	question: String,
	img: String,
	answer: String
})

const Question = model('Question', quesSchema);

module.exports = Question;