import { useState, useEffect } from 'react';

interface Task {
	title: string;
}

const ListAnnonces = () => {
	let [task, setTask] = useState<Task[]>([]);
	const auth = localStorage.getItem('authTokens') as string;
	const auth_json = JSON.parse(auth);
	const json_auth_token = auth_json.token;

	useEffect(() => {
		let getTask = async () => {
			let response = await fetch('http://127.0.0.1:8000/api/annonce/', {
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Token ' + json_auth_token,
				},
			});
			let data = await response.json();
			setTask(data);
		};
		getTask();
	}, [json_auth_token]);

	return <div>{task.length && task.map((task) => <div>{task.title} </div>)}</div>;
};

export default ListAnnonces;
