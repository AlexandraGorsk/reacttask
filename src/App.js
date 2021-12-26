import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import AppRouter from './router/AppRouter';

import styled from 'styled-components';
const Wrapper = styled('section')`
	display: flex;
	flex-direction: row;
	height: 100%;
`;

class App extends React.Component {
	render() {
		return (
			<Router>
				<Wrapper>
					<Menu />
					<AppRouter />
				</Wrapper>
			</Router>
		);
	}
}

export default App;
