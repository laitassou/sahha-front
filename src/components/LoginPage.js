import React from 'react';
import { Link } from 'react-router-dom';
import InputBox from './InputBox';

import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

function LoginPage() {
	const { loginUser } = useContext(AuthContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.uname.value;
		const password = e.target.pwd.value;
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
							<InputBox label="Email" type="text" id="uname" for="uname" name="uname" placeholder="Email" />
							<InputBox
								label="Mot de passe"
								type="password"
								id="pwd"
								for="password"
								name="password"
								placeholder="Enterez votre mot de passe"
							/>
							<InputBox class="submit_btn" type="submit" value="Se connecter" />
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
