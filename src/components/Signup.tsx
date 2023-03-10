import React, { FormEvent } from 'react';
import InputBox from './InputBox';

import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

import Select, { SingleValue } from 'react-select';

type OptionType = {
	value: string;
	label: string;
};
const options: readonly OptionType[] = [
	{ value: 'Worker', label: 'Aide à domicile' },
	{ value: 'Client', label: 'Client' },
	//{value: "Manager", label:"Gestionnaire"},
	//{value: "Supervisor", label:"Superviseur"},
];

function Signup() {
	const [first_name, setUsername] = useState('');
	const [last_name, setLastname] = useState('');

	const [email, setEmail] = useState('');
	const [role, setRole] = useState('');
	const [phone_number, setPhonenumber] = useState('');

	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const { registerUser } = useContext(AuthContext);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		registerUser(first_name, last_name, email, role, password, password2, phone_number);
	};

	const handleChange = (selectedOption: SingleValue<OptionType>) => {
		console.log('event ', selectedOption);
		if (selectedOption) {
			setRole(selectedOption.value);
		}
	};

	return (
		<div className="container">
			<div className="connect_box signup_box">
				<h2>Sign up</h2>
				<p>Register for free </p>
				<div className="login_form form_box">
					<form onSubmit={handleSubmit}>
						<InputBox
							label="First name"
							type="text"
							id="first_name"
							name="fname"
							onChange={(e) => setUsername(e.target.value)}
							placeholder="first_name"
						/>
						<InputBox
							label="Last name"
							type="text"
							id="last_name"
							onChange={(e) => setLastname(e.target.value)}
							name="lname"
							placeholder="last_name"
						/>
						<InputBox
							label="Email"
							type="email"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
							name="email"
							placeholder="Email"
						/>
						<InputBox
							label="phone_number"
							type="phone_number"
							id="phone_number"
							onChange={(e) => setPhonenumber(e.target.value)}
							name="phone_number"
							placeholder="phone"
						/>
						<Select
							onChange={handleChange}
							options={options}
							placeholder="role"
							defaultValue={options.find((op) => op.value === 'Client')}
						/>
						<InputBox
							label="Password"
							type="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
						<InputBox
							label="Confirm password"
							type="password"
							id="confirm-password"
							onChange={(e) => setPassword2(e.target.value)}
							placeholder="confirm password"
						/>
						<button>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Signup;
