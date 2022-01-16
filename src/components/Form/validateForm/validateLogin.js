export const validateLogin = (login) => {
	if (!login) return 'Логин не должен быть пустым';
	return '';
};
export const validateEmail = (email) => {
	let re =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	return !re.test(String(email).toLowerCase());
};
