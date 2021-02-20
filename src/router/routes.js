import React from 'react';
import App from '../pages/App';
import UpdateQuestion from '../pages/UpdateQuestion';
import Home from '../pages/Home';
import GameTrivia from '../pages/GameTrivia';
import HowFastCanUType from '../pages/HowFastCanUType';
import APIManagement from '../pages/APIManagement';
import Question from '../pages/SingleQuestion';

const routes = [
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: GameTrivia,
		key: 'Trivia',
		path: '/trivia'
	},
	{
		Component: HowFastCanUType,
		key: 'How Fast Can U Type',
		path: '/typing'
	},
	{
		Component: APIManagement,
		key: 'API Management',
		path: '/apiManagement'
	},
	{
		Component: UpdateQuestion,
		key: 'UpdateQuestion',
		path: '/apiManagement/:id/edit'
	},
	{
		Component: Question,
		key: 'SingleQuestion',
		path: '/apiManagement/:id'
	},
	{
		Component: App,
		key: '',
		path: '/'
	}
];

export default routes;
