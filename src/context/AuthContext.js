import { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
	const [authTokens, setAuthTokens] = useState(() => {
		try {
			const storedToken = localStorage.getItem('authTokens');
			if (storedToken) return JSON.parse(storedToken);
			else return null;
		} catch (e) {
			localStorage.clear(); //what you need to do incase the jwt is not valid
			console.log(e); //for your own debugging
		}
	});

	const [user, setUser] = useState(() => {
		const storedToken = localStorage.getItem('authTokens');
		if (storedToken) return JSON.parse(localStorage.getItem('authTokens'));
		else return null;
	});

	const [loading, setLoading] = useState(true);

	const history = useHistory({});

	const loginUser = async (email, password) => {
		const response = await fetch('http://127.0.0.1:8000/api/user/login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		const data = await response.json();
		if (response.status === 200) {
			//setAuthTokens(data);
			//user = jwt_decode(data.getItem("token"))
			setUser(data);
			localStorage.setItem('authTokens', JSON.stringify(data));
			history.push('/monespace');
		} else {
			alert('Something went wrong!');
		}
	};

	const registerUser = async (first_name, last_name, email, role, password, confirm_password, phone_number) => {
		console.log('paswwords', password, confirm_password);
		const response = await fetch('http://127.0.0.1:8000/api/user/signup/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				first_name,
				last_name,
				email,
				role,
				password,
				confirm_password,
				phone_number,
			}),
		});
		//response.header("Access-Control-Allow-Origin", "*");
		//response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		if (response.status === 200) {
			history.push('/login');
		} else {
			alert("Erreur d'enregistrement");
		}
	};

	const logoutUser = () => {
		//setAuthTokens(null);
		setUser(null);
		localStorage.removeItem('authTokens');
		history.push('/');
	};

	const publishAnnonce = async (title, description) => {
		const auth = localStorage.getItem('authTokens');
		console.log('auth_token:', auth, typeof auth);
		const auth_json = JSON.parse(auth);
		const json_auth_token = auth_json.token;
		console.log('auth_token:', json_auth_token);
		const response = await fetch('http://127.0.0.1:8000/api/annonces/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Token ' + json_auth_token,
			},
			body: JSON.stringify({
				title,
				description,
			}),
		});
		//response.header("Access-Control-Allow-Origin", "*");
		//response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		if (response.status === 200) {
			history.push('/');
		} else {
			alert('Erreur de publication');
		}
	};

	const list_annonces = async () => {
		const auth = localStorage.getItem('authTokens');
		const auth_json = JSON.parse(auth);
		const json_auth_token = auth_json.token;
		const response = await fetch('http://127.0.0.1:8000/api/annonce/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Token ' + json_auth_token,
			},
		});

		const data = await response.json();
		if (response.status === 200) {
			return data;
		} else {
			alert('Erreur de listing');
			return null;
		}
	};

	const publishSlots = async (annonce_id, description, start_time, end_time) => {
		const auth = localStorage.getItem('authTokens');
		const auth_json = JSON.parse(auth);
		const json_auth_token = auth_json.token;
		console.log('auth_token:', json_auth_token);
		const response = await fetch('http://127.0.0.1:8000/api/slots/' + annonce_id + '/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Token ' + json_auth_token,
			},
			body: JSON.stringify({
				description,
				start_time,
				end_time,
			}),
		});
		//response.header("Access-Control-Allow-Origin", "*");
		//response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		if (response.status === 200) {
			history.push('/');
		} else {
			alert('Erreur de publication');
		}
	};

	const contextData = {
		user,
		setUser,
		authTokens,
		setAuthTokens,
		registerUser,
		loginUser,
		logoutUser,
		publishAnnonce,
		list_annonces,
		publishSlots,
	};

	useEffect(() => {
		if (authTokens) {
			setUser((authTokens.token));
		}
		setLoading(false);
	}, [authTokens, loading]);

	return <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>;
};
