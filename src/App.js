import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import AppRouter from './router/AppRouter';
import { store } from './store';
import styled from 'styled-components';
import { Provider } from 'react-redux';
const Wrapper = styled('section')`
	display: flex;
	flex-direction: row;
	height: 100%;
`;

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Wrapper>
						<Menu />
						<AppRouter />
					</Wrapper>
				</Router>
			</Provider>
		);
	}
}

export default App;
