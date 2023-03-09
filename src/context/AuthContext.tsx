import { createContext, useState, useEffect, FC, PropsWithChildren } from 'react';
import { useHistory } from 'react-router-dom';

export interface User {
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	role: string;
	phone_number?: string;
}

export interface AuthToken {
	access: string;
	refresh: string;
}

interface AuthContextProps {
	user?: User;
	authTokens?: AuthToken;
	loginUser: (email: string, password: string) => Promise<void>;
	registerUser: (
		first_name: string,
		last_name: string,
		email: string,
		role: string,
		password: string,
		confirm_password: string,
		phone_number?: string,
	) => Promise<void>;
	logoutUser: () => void;
	publishAnnonce: (title: string, description: string) => Promise<void>;
	list_annonces: () => Promise<void>;
	publishSlots: (annonce_id: number, description: string, start_time: number, end_time: number) => Promise<void>;
	setAuthTokens: React.Dispatch<any>;
	setUser: React.Dispatch<any>;
}

const AuthContext = createContext<AuthContextProps>({
	loginUser: async () => {},
	registerUser: async () => {},
	logoutUser: async () => {},
	publishAnnonce: async () => {},
	list_annonces: async () => {},
	publishSlots: async () => {},
	setAuthTokens: () => {},
	setUser: () => {},
});

export default AuthContext;

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(() => {
		const storedToken = localStorage.getItem('authTokens');
		if (storedToken) return JSON.parse(storedToken);
		else return null;
	});

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

	const history = useHistory();

	const loginUser = async (email: string, password: string) => {
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

	const registerUser = async (
		first_name: string,
		last_name: string,
		email: string,
		role: string,
		password: string,
		confirm_password: string,
		phone_number?: string,
	) => {
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

	const publishAnnonce = async (title: string, description: string) => {
		const auth = localStorage.getItem('authTokens');
		if (!auth) {
			return;
		}
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
		if (!auth) {
			return;
		}
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

	const publishSlots = async (annonce_id: number, description: string, start_time: number, end_time: number) => {
		const auth = localStorage.getItem('authTokens');
		if (!auth) {
			return;
		}
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
			setUser(authTokens.token);
		}
		setLoading(false);
	}, [authTokens, loading]);

	return <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>;
};
