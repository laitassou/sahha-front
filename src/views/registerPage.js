import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

import Select from 'react-select';

const options = [
	{ value: 'Worker', label: 'Aide à domicile' },
	{ value: 'Client', label: 'Client' },
	//{value: "Manager", label:"Gestionnaire"},
	//{value: "Supervisor", label:"Superviseur"},
];

function Register() {
	const [first_name, setUsername] = useState('');
	const [last_name, setLastname] = useState('');

	const [email, setEmail] = useState('');
	const [role, setRole] = useState('');

	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const { registerUser } = useContext(AuthContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		registerUser(first_name, last_name, email, role, password, password2);
	};

	const handleChange = (selectedOption) => {
		console.log('event ', selectedOption);
		setRole(selectedOption.value);
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<h1>Register</h1>
				<hr />
				<div>
					<label htmlFor="first_name">first name</label>
					<input
						type="text"
						id="first_name"
						onChange={(e) => setUsername(e.target.value)}
						placeholder="first_name"
						required
					/>
				</div>
				<div>
					<label htmlFor="username">last name</label>
					<input
						type="text"
						id="last_name"
						onChange={(e) => setLastname(e.target.value)}
						placeholder="last_name"
						required
					/>
				</div>
				<div>
					<label htmlFor="username">email</label>
					<input type="text" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" required />
				</div>
				<div>
					<div>
						<Select onChange={handleChange} options={options} placeholder="role" defaultValue="Client" />
					</div>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
						required
					/>
				</div>
				<div>
					<label htmlFor="confirm-password">Confirm Password</label>
					<input
						type="password"
						id="confirm-password"
						onChange={(e) => setPassword2(e.target.value)}
						placeholder="Confirm Password"
						required
					/>
					<p>{password2 !== password ? 'Passwords do not match' : ''}</p>
				</div>
				<button>Register</button>
			</form>
		</section>
	);
}

export default Register;
