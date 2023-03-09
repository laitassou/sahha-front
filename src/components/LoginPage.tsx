import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import InputBox from './InputBox';

import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { loginUser } = useContext(AuthContext);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		email.length > 0 && loginUser(email, password);
	};

	return (
		<div className=" full_height mobile_box">
			<div className="container">
				<div className="connect_box login_page">
					<h2>Bienvenue</h2>
					<p>Connectez vous et accedez à votre espace </p>
					<div className="login_form form_box">
						<form onSubmit={handleSubmit}>
							<InputBox
								label="Email"
								type="text"
								id="uname"
								name="uname"
								placeholder="Email"
								onChange={(e) => setEmail(e.currentTarget.value)}
							/>
							<InputBox
								label="Mot de passe"
								type="password"
								id="pwd"
								name="password"
								placeholder="Enterez votre mot de passe"
								onChange={(e) => setPassword(e.currentTarget.value)}
							/>
							<InputBox className="submit_btn" type="submit" value="Se connecter" />
							<div className="login_btm_box">
								<p>
									Pas encore de compte? <Link to="/signup">Créer un compte</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
