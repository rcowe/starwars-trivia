import React from 'react';
import App from '../pages/App';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import GameTrivia from '../pages/GameTrivia';
import HowFastCanUType from '../pages/HowFastCanUType';
import Login from '../pages/Login';

const routes = [
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: GameTrivia,
		key: 'GameLevel1',
		path: '/level1'
	},
	{
		Component: HowFastCanUType,
		key: 'GameLevel2',
		path: '/level2'
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
