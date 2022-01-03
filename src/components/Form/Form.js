import React from 'react';
import { useState } from 'react';

function Form() {
	const [formData, setFormData] = useState({
		gender: 'male',
		login: '',
		email: '',
		firstName: '',
		lastName: '',
		address: '',
		phone: '',
	});
	const handleChangeFormData = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
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
		});
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
							value={formData.gender}
							onChange={handleChangeFormData}
						/>
						<Checkbox
							label='Female'
							value={formData.gender}
							onChange={handleChangeFormData}
						/>
					</div>
					<div>
						<h4>Login</h4>
						<input
							className='input'
							value={formData.login}
							name='login'
							type='text'
							placeholder='Enter your login'
							onChange={handleChangeFormData}
						/>
					</div>
					<div>
						<h4>E-mail</h4>
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
						{/* <h5 className='errormessage'>{errorEmptyName}</h5> */}
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
							value={formData.adress}
							name='adress'
							type='text'
							placeholder='Enter your Adress'
							onChange={handleChangeFormData}
						/>
					</div>
					<div>
						<h4>Mobile Phone</h4>
						{/* <h5 className='errormessage'>{errorEmptyPhone}</h5> */}
						<input
							className='input'
							value={formData.mobilePhone}
							name='mobilePhone'
							type='text'
							placeholder='Enter your mobile phone'
							onChange={handleChangeFormData}
						/>
					</div>
					{/* <div>
					<h4>Receive important messages</h4>
					<Checkbox
						label='Yes'
						value={formData.importantYes}
						onChange={handleImportantYes}
					/>
					<Checkbox
						label='No'
						value={importantNo}
						onChange={handleImportantNo}
					/>
				</div> */}
					<div>
						<button className='send' onClick={sendButton}>
							Send
						</button>
					</div>
				</form>
			</div>
		);
	};
}

export default Form;
