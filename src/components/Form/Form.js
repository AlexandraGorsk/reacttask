import React from 'react';
import { useState, useEffect } from 'react';

function Form() {
	const [formData, setFormData] = useState({
		gender: 'male',
		login: '',
		email: '',
		firstName: '',
		lastName: '',
		address: '',
		phone: '',
		important: 'yes',
	});
	const [errorLogin, setErrorLogin] = useState('');
	// const [errorValidateEmail, setErrorValidateEmail] = useState('');
	const [touchedLogin, setTouchedLogin] = useState(false);
	const [formValid, setFormValid] = useState(false);
	const handleChangeFormData = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleBlurLogin = (e) => {
		setTouchedLogin(true);
		if (touchedLogin) {
			setErrorLogin('Логин не должен быть пустым');
		}
	};
	useEffect(() => {
		if (errorLogin) {
			setFormValid(false);
		} else setFormValid(true);
	}, [errorLogin]);
	// function validateEmail(email) {
	// 	var re =
	// 		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	// 	return re.test(String(email).toLowerCase());
	// }
	const sendButton = (e) => {
		e.preventDefault();

		// if (formData.email !== '') {
		// 	if (!validateEmail(formData.email)) {
		// 		setErrorValidateEmail('Имейл не корректный, будь в курсе');
		// 	}
		// }
		console.log(formData);
		setFormData({
			gender: 'male',
			login: '',
			email: '',
			firstName: '',
			lastName: '',
			address: '',
			phone: '',
			important: 'yes',
		});
	};
	const RadioGender = ({ label, value, onChange, name }) => {
		return (
			<label>
				<input
					name={name}
					type='radio'
					checked={value === formData.gender}
					value={value}
					onChange={onChange}
				/>
				{label}
			</label>
		);
	};
	const RadioMessage = ({ label, value, onChange, name }) => {
		return (
			<label>
				<input
					name={name}
					type='radio'
					checked={value === formData.important}
					value={value}
					onChange={onChange}
				/>
				{label}
			</label>
		);
	};
	return (
		<div className='registration'>
			<form>
				<div>
					<RadioGender
						label='Male'
						name='gender'
						value='male'
						onChange={handleChangeFormData}
					/>
					<RadioGender
						label='Female'
						name='gender'
						value='Female'
						onChange={handleChangeFormData}
					/>
				</div>
				<div>
					<h4>Login</h4>
					{touchedLogin && errorLogin && (
						<h5 className='errormessage'>{errorLogin}</h5>
					)}
					<input
						className='input'
						value={formData.login}
						name='login'
						type='text'
						placeholder='Enter your login'
						onChange={handleChangeFormData}
						onBlur={handleBlurLogin}
						required
					/>
				</div>
				<div>
					<h4>E-mail</h4>
					{/* <h5 className='errormessage'>{errorValidateEmail}</h5> */}
					<input
						className='input'
						value={formData.email}
						name='email'
						type='text'
						placeholder='Enter your email'
						onChange={handleChangeFormData}
					/>
				</div>
				<div>
					<h4>First Name</h4>
					<input
						className='input'
						value={formData.firstName}
						name='firstName'
						type='text'
						placeholder='Enter your First Name'
						onChange={handleChangeFormData}
					/>
				</div>
				<div>
					<h4>Last Name</h4>
					<input
						className='input'
						value={formData.lastName}
						name='lastName'
						type='text'
						placeholder='Enter your Last Name'
						onChange={handleChangeFormData}
					/>
				</div>
				<div>
					<h4>Adress</h4>
					<input
						className='input'
						value={formData.address}
						name='address'
						type='text'
						placeholder='Enter your Adress'
						onChange={handleChangeFormData}
					/>
				</div>
				<div>
					<h4>Mobile Phone</h4>
					<input
						className='input'
						value={formData.phone}
						name='phone'
						type='text'
						placeholder='Enter your mobile phone'
						onChange={handleChangeFormData}
					/>
				</div>
				<div>
					<h4>Receive important messages</h4>
					<RadioMessage
						label='YES'
						name='important'
						value='yes'
						onChange={handleChangeFormData}
					/>
					<RadioMessage
						label='NO'
						name='important'
						value='no'
						onChange={handleChangeFormData}
					/>
				</div>
				<div>
					<button disabled={!formValid} className='send' onClick={sendButton}>
						Send
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
