import styled from 'styled-components';
import React from 'react';

export const UserItem = styled('h1')`
	border: 1px solid black;
`;

const User = ({ user }) => {
	return <UserItem>{user.login}</UserItem>;
};

export default User;
