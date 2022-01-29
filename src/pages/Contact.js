import React from 'react';
import { useSelector } from 'react-redux';
import { UserItem } from '../components/Users/user';
import { getSlice } from '../store/form';

function Contact() {
	const users = useSelector(getSlice);
	const User = users?.map(({ login, email, phone, id }) => (
		<UserItem login={login} key={id} phone={phone} id={id} />
	));
	return (
		<div className='content'>
			<h1>Users</h1>
			{User}
		</div>
	);
}

export default Contact;
