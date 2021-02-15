import React from 'react';
import App from '../pages/App';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import GameLevel1 from '../pages/GameLevel1';
import GameLevel2 from '../pages/GameLevel2';
import GameLevel3 from '../pages/GameLevel3';
import Login from '../pages/Login';

const routes = [
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: GameLevel1,
		key: 'GameLevel1',
		path: '/level1'
	},
	{
		Component: GameLevel2,
		key: 'GameLevel2',
		path: '/level2'
	},
	{
		Component: GameLevel3,
		key: 'GameLevel3',
		path: '/level3'
	},
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	},
	{
		Component: Login,
		key: 'Login',
		path: '/login'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
