import React, { useEffect } from 'react';
import { useState } from 'react';
import { validateLogin, validateEmail } from './validateForm/validateLogin.js';

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
	const errorLogin = validateLogin(formData.login);
	const errorEmail = validateEmail(formData.email);
	const [touched, setTouched] = useState({
		login: false,
		email: false,
	});
	const [formValid, setFormValid] = useState(false);
	const handleChangeFormData = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleBlur = (e) => {
		setTouched({ ...touched, [e.target.name]: true });
	};

	useEffect(() => {
		if (!!errorLogin) {
			setFormValid(false);
		} else setFormValid(true);
	}, [errorLogin]);

	const sendButton = (e) => {
		e.preventDefault();

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
		setTouched({
			login: false,
			email: false,
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
					{touched.login && !!errorLogin && (
						<h5 className='errormessage'>{errorLogin}</h5>
					)}
					<input
						className='input'
						value={formData.login}
						name='login'
						type='text'
						placeholder='Enter your login'
						onChange={handleChangeFormData}
						onBlur={handleBlur}
						required
					/>
				</div>
				<div>
					<h4>E-mail</h4>
					{touched.email && errorEmail && (
						<h5 className='errormessage'>Введите корректный email</h5>
					)}
					<input
						className='input'
						value={formData.email}
						name='email'
						type='text'
						placeholder='Enter your email'
						onChange={handleChangeFormData}
						onBlur={handleBlur}
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
