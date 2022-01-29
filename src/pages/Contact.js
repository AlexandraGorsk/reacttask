import React from 'react';
import { useSelector } from 'react-redux';
import { getSlice } from '../store/form';

function Contact() {
	const users = useSelector(getSlice);
	return (
		<div className='content'>
			<h1>Users</h1>
			{users}
		</div>
	);
}

export default Contact;
