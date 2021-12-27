import React from 'react';
import { useState } from 'react';

function Form() {
	const [checkedMale, setCheckedMale] = useState(true);
	const [checkedFemale, setCheckedFemale] = useState(false);
	const [login, SetLogin] = useState('');
	const [email, SetEmail] = useState('');
	const [firstName, SetFirtName] = useState('');
	const [lastName, SetLastName] = useState('');
	const [adress, SetAdress] = useState('');
	const [mobilePhone, SetModilePhone] = useState('');
	const handleCheckedMale = () => {
		setCheckedMale(!checkedMale);
		setCheckedFemale(!checkedFemale);
	};
	const handleCheckedFemale = () => {
		setCheckedFemale(!checkedFemale);
		setCheckedMale(!checkedMale);
	};
	const loginHandler = (e) => {
		SetLogin(e.target.value);
	};
	const emailHandler = (e) => {
		SetEmail(e.target.value); //можно добавить валидацию
	};
	const fNameHandler = (e) => {
		SetFirtName(e.target.value);
	};
	const lNameHandler = (e) => {
		SetLastName(e.target.value);
	};
	const adressHandler = (e) => {
		SetAdress(e.target.value);
	};
	const mPhoneHandler = (e) => {
		SetModilePhone(e.target.value);
	};
	const sendButton = (e) => {
		e.preventDefault();
		console.log(login);
		console.log(email);
		console.log(firstName);
		console.log(lastName);
		console.log(adress);
		console.log(mobilePhone);
		SetLogin('');
		SetEmail('');
		SetFirtName('');
		SetLastName('');
		SetAdress('');
		SetModilePhone('');
	};
	const Checkbox = ({ label, value, onChange }) => {
		return (
			<label>
				<input type='checkbox' checked={value} onChange={onChange} />
				{label}
			</label>
		);
	};
	return (
		<div className='registration'>
			<form>
				<div>
					<Checkbox
						label='Male'
						value={checkedMale}
						onChange={handleCheckedMale}
					/>
					<Checkbox
						label='Female'
						value={checkedFemale}
						onChange={handleCheckedFemale}
					/>
				</div>
				<div>
					<h5>Login</h5>
					<input
						className='input'
						value={login}
						name='login'
						type='text'
						placeholder='Enter your login'
						onChange={(e) => loginHandler(e)}
					/>
				</div>
				<div>
					<h5>E-mail</h5>
					<input
						className='input'
						value={email}
						name='email'
						type='text'
						placeholder='Enter your email'
						onChange={(e) => emailHandler(e)}
					/>
				</div>
				<div>
					<h5>First Name</h5>
					<input
						className='input'
						value={firstName}
						name='firstName'
						type='text'
						placeholder='Enter your First Name'
						onChange={(e) => fNameHandler(e)}
					/>
				</div>
				<div>
					<h5>Last Name</h5>
					<input
						className='input'
						value={lastName}
						name='lastName'
						type='text'
						placeholder='Enter your Last Name'
						onChange={(e) => lNameHandler(e)}
					/>
				</div>
				<div>
					<h5>Adress</h5>
					<input
						className='input'
						value={adress}
						name='adress'
						type='text'
						placeholder='Enter your Adress'
						onChange={(e) => adressHandler(e)}
					/>
				</div>
				<div>
					<h5>Mobile Phone</h5>
					<input
						className='input'
						value={mobilePhone}
						name='mobilePhone'
						type='text'
						placeholder='Enter your mobile phone'
						onChange={(e) => mPhoneHandler(e)}
					/>
				</div>
				<div>
					<button className='send' onClick={sendButton}>
						Send
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
