import React, { useState, useEffect } from 'react';

const ListAnnonces = () => {
	const auth = localStorage.getItem('authTokens');
	const auth_json = JSON.parse(auth);
	const json_auth_token = auth_json.token;

	let [task, setTask] = useState([]);

	useEffect(() => {
		getTask();
	}, []);

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

	return <div>{task.length && task.map((task) => <div>{task.title} </div>)}</div>;
};

export default ListAnnonces;
