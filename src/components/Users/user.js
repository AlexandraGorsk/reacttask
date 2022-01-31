import styled from 'styled-components';
import React from 'react';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../store/form';

export const UserItem = styled('div')`
	border: 1px solid black;
	padding: 10px;
`;

const User = ({ user, id }) => {
	const dispatch = useDispatch();
	const handleDeteleUser = () => {
		dispatch(deleteUser(id));
	};
	return (
		<div className='user-box '>
			<h1>{user.firstName}</h1>
			<p className='gender'>{user.gender}</p>
			<h5>{user.email}</h5>
			<p>{user.phone}</p>
			<Button onClick={handleDeteleUser}>Delete</Button>
		</div>
	);
};

export default User;
