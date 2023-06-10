import { createContext, useState, useEffect, FC, PropsWithChildren } from 'react';
import { useHistory } from 'react-router-dom';
import { Exception } from 'sass';

import MAIN_URL from 'utils/constants';

export interface Agence {
	agence_id: number;
	name: string;
	city: string;
	address: string;
	manager: User;
	phone_number: string;

}
export interface User {
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	role: string;
	phone_number?: string;
	agence_id: number;
	agence_name: string;
	agence_city: string;
	agence_address: string;
	agence_manager: User;
	agence_phone: string;
}

export interface AuthToken {
	access: string;
	refresh: string;
}

interface AuthContextProps {
	user?: User;
	full_user?: User;
	authTokens?: AuthToken;
	loginUser: (email: string, password: string) => Promise<void>;
	registerUser: (
		first_name: string,
		last_name: string,
		email: string,
		role: string,
		agence: string,
		password: string,
		confirm_password: string,
		phone_number?: string,
	) => Promise<void>;
	logoutUser: () => void;
	publishAnnonce: (title: string, description: string, address: string) => Promise<void>;
	deleteSlot: (event: number) => Promise<void>;
	list_annonces: () => Promise<void>;
	publishSlots: (annonce_id: number, description: string, start_time: number, end_time: number) => Promise<void>;
	setAuthTokens: React.Dispatch<any>;
	setUser: React.Dispatch<any>;
	post_feedback: (slot_id: number, worker_id: number, feedback: string, score: number) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
	loginUser: async () => { },
	registerUser: async () => { },
	logoutUser: async () => { },
	publishAnnonce: async () => { },
	list_annonces: async () => { },
	publishSlots: async () => { },
	setAuthTokens: () => { },
	setUser: () => { },
	deleteSlot: async () => { },
	post_feedback: async () => { },
});

export default AuthContext;

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(() => {
		const storedToken = localStorage.getItem('authTokens');
		if (storedToken) return JSON.parse(storedToken);
		else return null;
	});

	const [full_user, setFullUser] = useState(() => {
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
		}
	});

	const history = useHistory();

	const loginUser = async (email: string, password: string) => {
		const response = await fetch(MAIN_URL + '/user/login/', {
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
			setFullUser(data);
			localStorage.setItem('authTokens', JSON.stringify(data));
			history.push('/monespace');
		} else {
			throw new Error(data.error);
		}
	};

	const registerUser = async (
		first_name: string,
		last_name: string,
		email: string,
		role: string,
		agence_id: string,
		password: string,
		confirm_password: string,
		phone_number?: string,
	) => {
		const response = await fetch(MAIN_URL + '/user/signup/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				first_name,
				last_name,
				email,
				role,
				agence_id,
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
			throw new Error("Erreur d'enregistrement");
		}
	};

	const logoutUser = () => {
		//setAuthTokens(null);
		setUser(null);
		localStorage.removeItem('authTokens');
		history.push('/');
	};

	const publishAnnonce = async (title: string, description: string, address: string) => {
		const auth = localStorage.getItem('authTokens');
		if (!auth) {
			throw new Error('Vous devez être connecté pour publier une annonce');
		}
		const auth_json = JSON.parse(auth);
		const json_auth_token = auth_json.token;
		const response = await fetch(MAIN_URL + '/annonces/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Token ' + json_auth_token,
			},
			body: JSON.stringify({
				title,
				description,
				address
			}),
		});
		//response.header("Access-Control-Allow-Origin", "*");
		//response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		if (response.status === 201) {
			//history.push('/monespace/');

		} else {
			throw new Error('Erreur de publication');
		}
	};

	const list_annonces = async () => {
		const auth = localStorage.getItem('authTokens');
		if (!auth) {
			return;
		}
		const auth_json = JSON.parse(auth);
		const json_auth_token = auth_json.token;
		const response = await fetch(MAIN_URL + '/annonce/', {
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
			throw new Error('Erreur de listing');
			//return null;
		}
	};

	const publishSlots = async (annonce_id: number, description: string, start_time: number, end_time: number) => {
		const auth = localStorage.getItem('authTokens');
		if (!auth) {
			return;
		}
		const auth_json = JSON.parse(auth);
		const json_auth_token = auth_json.token;
		const response = await fetch(MAIN_URL + '/slots/' + annonce_id + '/', {
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
			throw new Error('Erreur de reservation de créneaux');
		}
	};

	const deleteSlot = async (event: number) => {
		const auth = localStorage.getItem('authTokens');
		if (!auth) {
			return;
		}
		const auth_json = JSON.parse(auth);
		const json_auth_token = auth_json.token;
		console.log('Delete event with id', event);
	};



	const post_feedback = async (slot_id: number, worker_id: number, feedback: string, score: number) => {
		const auth = localStorage.getItem('authTokens');
		if (!auth) {
			throw new Error('Vous devez être connecté pour donner un feedback');
		}
		const auth_json = JSON.parse(auth);
		const json_auth_token = auth_json.token;

		const response = await fetch(MAIN_URL + '/feedback/' + slot_id + '/' + worker_id, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Token ' + json_auth_token,
			},
			body: JSON.stringify({
				feedback,
				score,
			}),
		});
		if (response.status === 201) {
		} else {
			throw new Error('Erreur de publication');
		}
	};


	const contextData = {
		user,
		setUser,
		full_user,
		setFullUser,
		authTokens,
		setAuthTokens,
		registerUser,
		loginUser,
		logoutUser,
		publishAnnonce,
		list_annonces,
		publishSlots,
		deleteSlot,
		post_feedback,
	};

	useEffect(() => {
		if (authTokens) {
			setUser(authTokens.token);
			setFullUser(authTokens);
		}
		setLoading(false);
	}, [authTokens, loading]);

	return <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>;
};
