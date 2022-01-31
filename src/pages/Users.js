import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserItem } from '../components/Users/user';
import { getSlice } from '../store/form';

function Users() {
	const userList = useSelector(getSlice);
	useEffect(() => {
		localStorage.setItem('userList', JSON.stringify(userList));
	}, [userList]);
	const user = userList?.map((user) => (
		<UserItem key={user.login} user={user} />
	));
	return (
		<div className='content'>
			<h1>Users</h1>
			{user}
		</div>
	);
}

export default Users;
