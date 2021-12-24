import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Main = styled('section')`
	border-right: 1px solid rgb(246, 235, 235);
	background-color: rgb(236, 235, 235);
	height: 1000px;
	width:200px;
`;
const NavItem = styled('li')`
	list-style: none;
	padding: 20px;
	margin: 0px 8px 0px 0px;
	font-size: 20px;
	> a {
		text-decoration: none;
		color: #333;
	}
	a:hover {
		color: gray;
	}
`;

const Menu = () => {
	return (
		<Main>
			<ul>
				<NavItem>
					<Link to='about'>About us</Link>
				</NavItem>
				<NavItem>
					<Link to='contacts'>Contact us</Link>
				</NavItem>
				<NavItem>
					<Link to='news'>Our news</Link>
				</NavItem>
			</ul>
		</Main>
	);
};

export default Menu;
