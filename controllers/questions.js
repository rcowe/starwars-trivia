const Question = require('../models/questions');
const express = require('express');
const quesRouter = express.Router();

quesRouter.post('/', async (req, res) => {
	try {
		const newQuestion = await Question.create(req.body);
		res
			.status(200)
			.json(newQuestion)
	} catch (error) {
		res
			.status(400)
			.json(error)
	}
});

/* Index */
quesRouter.get('/', async (req, res) => {
	try{
		const foundQuestions = await Question.find({})
			res
				.status(200)
				.json(foundQuestions)
	} catch (error) {
			res
				.status(400)
				.json(error)
	}
});

/* Show */
quesRouter.get('/:id', async(req, res) => {
	try {
		const foundQuestion = await Question.findById(req.params.id)
		res
			.status(200)
			.json(foundQuestion)
	} catch (error) {
		res
			.status(400)
			.json(error)
	}
});

/* Destroy */
quesRouter.delete('/:id', async (req, res) => {
	try {
		const foundQuestion = await Question.findByIdAndDelete(req.params.id)
		res
			.status(200)
			.json(foundQuestion)
	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})

/* Update */
quesRouter.put('/:id', async (req, res) => {
	try {
		const foundQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true } )

		res
			.status(200)
			.json(foundQuestion)
	} catch (error) {
		res
			.status(400)
			.json(error)
	}
})

module.exports = quesRouter;