import React from 'react';
import { Link } from 'react-router-dom';
import { MenuData } from './MenuData';
import { Drawer, Divider, List, ListItem, ListItemText } from '@mui/material';

const Menu = () => {
	const drawerWidth = 240;
	console.log(MenuData);
	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
			}}
			variant='permanent'
			anchor='left'
		>
			<Divider />
			<List>
				{MenuData.map((item, index) => (
					<ListItem button key={index}>
						<ListItemText>
							<Link
								to={item.path}
								style={{ textDecoration: 'none', color: 'black', fontSize: 20 }}
							>
								{item.title}
							</Link>
						</ListItemText>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default Menu;
