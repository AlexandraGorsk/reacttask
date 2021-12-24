import React from 'react';
import styled from 'styled-components';

import { Routes, Route } from 'react-router-dom';
const Description = styled('h2')`
	padding: 20px;
`;

const AppRouter = () => {
	return (
		<Routes>
			<Route path='about' element={<Description>about</Description>} />
			<Route path='contacts' element={<Description>contacts</Description>} />
			<Route path='news' element={<Description>news</Description>} />
		</Routes>
	);
};

export default AppRouter;
