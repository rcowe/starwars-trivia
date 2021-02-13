import React from 'react';
import App from '../pages/App';
import Contact from '../pages/Contact';
import GameLevel1 from '..pages/GameLevel1';

const routes = [
	{
		Component:GameLevel1,
		key: 'GameLevel1',
		path: '/level1'
	},
	{
		Component:Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component:App,
		key: 'App',
		path: '/'
	}
]