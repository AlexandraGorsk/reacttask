import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSlice } from '../store/form';
import User from '../components/Users';

function Users() {
	const { userList } = useSelector(getSlice);
	useEffect(() => {
		localStorage.setItem('userList', JSON.stringify(userList));
	}, [userList]);
	const user = userList?.map((item) => (
		<User key={item.login} user={item} id={item.id} />
	));
	return <div className='user-wrapper'>{user}</div>;
}

export default Users;
