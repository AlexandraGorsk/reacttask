// import styled from 'styled-components';
// import React from 'react';
// import Button from '../Button';
// export const UserItem = styled('div')`
// 	border: 1px solid black;
// 	padding: 10px;
// `;

// const User = ({ user, id }) => {
// 	const dispatch = useDispatch();
// 	const handleDeteleUser = () => {
// 		dispatch(deleteUser(id));
// 	};
// 	return (
// 		<div className='user-box '>
// 			<h1>{user.firstName}</h1>
// 			<p className='gender'>{user.gender}</p>
// 			<h5>{user.email}</h5>
// 			<p>{user.phone}</p>
// 			<Button onClick={handleDeteleUser}>Delete</Button>
// 		</div>
// 	);
// };

// export default User;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { useDispatch } from 'react-redux';
import { deleteUser } from '../../store/form';

export default function User({ user, id }) {
	const dispatch = useDispatch();
	const handleDeteleUser = () => {
		dispatch(deleteUser(id));
	};
	return (
		<Card sx={{ maxWidth: 345, maxHeight: 200 }}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{user.firstName}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{user.email}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{user.phone}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary' onClick={handleDeteleUser}>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
}
