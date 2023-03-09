import { FormEvent, useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { loginUser } = useContext(AuthContext);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		username.length > 0 && loginUser(username, password);
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<h1>Login </h1>
				<hr />
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					placeholder="Enter Username"
					onChange={(e) => setUsername(e.currentTarget.value)}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					placeholder="Enter Password"
					onChange={(e) => setPassword(e.currentTarget.value)}
				/>
				<button type="submit">Login</button>
			</form>
		</section>
	);
};

export default LoginPage;
