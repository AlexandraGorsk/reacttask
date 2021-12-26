import React from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
import News from '../pages/News';

import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<About />} />
			<Route path='contact' element={<Contact />} />
			<Route path='news' element={<News />} />
		</Routes>
	);
};

export default AppRouter;
