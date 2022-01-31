import React from 'react';
import Registration from '../pages/Registration';
import Users from '../pages/Users';
import News from '../pages/News';

import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Registration />} />
			<Route path='users' element={<Users />} />
			<Route path='news' element={<News />} />
		</Routes>
	);
};

export default AppRouter;
