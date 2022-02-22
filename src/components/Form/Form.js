import React from 'react';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/form/form.action.js';

import {
	TextField,
	Stack,
	RadioGroup,
	Radio,
	FormControlLabel,
	FormControl,
	Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Form() {
	const {
		handleBlur,
		handleChange,
		errors,
		values,
		handleSubmit,
		handleReset,
		touched,
	} = useFormik({
		initialValues: {
			gender: 'Female',
			login: '',
			email: '',
			firstName: '',
			lastName: '',
			address: '',
			phone: '',
			important: 'Yes',
		},
		validationSchema: yup.object().shape({
			login: yup.string().required('Поле обязательно'),
			email: yup.string().email('Must be a valid email'),
			firstName: yup.string().required('Поле обязательно'),
			lastName: yup.string().required('Поле обязательно'),
			address: yup.string().required('Поле обязательно'),
			phone: yup
				.number()
				.typeError('Телефон выглядит странно')
				.required('Поле обязательно'),
		}),
		onSubmit: (data) => {
			console.log(data);
			dispatch(addUser(data));
			handleReset();
		},
	});
	const dispatch = useDispatch();
	// const [formData, setFormData] = useState({
	// 	gender: 'Female',
	// 	login: '',
	// 	email: '',
	// 	firstName: '',
	// 	lastName: '',
	// 	address: '',
	// 	phone: '',
	// 	important: 'Yes',
	// });
	// const handleRadioChange = (e) => {
	// 	console.log(e.target.name);
	// 	console.log(e.target.value);
	// 	setFormData({ ...formData, [e.target.name]: e.target.value });
	// 	console.log(formData);
	// };
	// console.log(formData);
	return (
		<div className='registration'>
			<form onSubmit={handleSubmit} onReset={handleReset}>
				<div>
					<FormControl>
						<RadioGroup
							row
							value={values.gender}
							onChange={handleChange}
							name='gender'
						>
							<FormControlLabel
								value='Female'
								control={<Radio />}
								label='Female'
							/>
							<FormControlLabel value='Male' control={<Radio />} label='Male' />
						</RadioGroup>
					</FormControl>
				</div>
				<Stack direction='column' spacing={1.5} mt={2}>
					<TextField
						sx={{ width: 400 }}
						label='Login'
						id='login'
						name='login'
						value={values.login}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.login && !!errors.login}
						helperText={touched.login && errors.login}
						fullWidth
					/>
					<TextField
						fullWidth
						label='E-mail'
						id='email'
						name='email'
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.email && !!errors.email}
						helperText={touched.email && errors.email}
					/>
					<TextField
						fullWidth
						label='First Name'
						id='firstName'
						name='firstName'
						value={values.firstName}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.firstName && !!errors.firstName}
						helperText={touched.firstName && errors.firstName}
					/>
					<TextField
						fullWidth
						label='Last Name'
						id='lastName'
						name='lastName'
						value={values.lastName}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.lastName && !!errors.lastName}
						helperText={touched.lastName && errors.lastName}
					/>
					<TextField
						fullWidth
						label='Address'
						id='address'
						name='address'
						value={values.address}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.address && !!errors.address}
						helperText={touched.address && errors.address}
					/>
					<TextField
						fullWidth
						label='Mobile Phone'
						id='phone'
						name='phone'
						value={values.phone}
						onChange={handleChange}
						onBlur={handleBlur}
						error={touched.phone && !!errors.phone}
						helperText={touched.phone && errors.phone}
					/>
					<div>
						<FormControl>
							<Typography>Receive important messages</Typography>
							<RadioGroup
								row
								name='important'
								value={values.important}
								onChange={handleChange}
							>
								<FormControlLabel value='Yes' control={<Radio />} label='Yes' />
								<FormControlLabel value='No' control={<Radio />} label='No' />
							</RadioGroup>
						</FormControl>
					</div>
				</Stack>
				<div>
					<button className='send' type='submit'>
						Send
					</button>
				</div>
			</form>
		</div>
	);
}

export default Form;
