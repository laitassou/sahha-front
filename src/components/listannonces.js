import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

const ListAnnonces = () => {
	const auth = localStorage.getItem('authTokens');
	const auth_json = JSON.parse(auth);
	const json_auth_token = auth_json.token;
	const { user, logoutUser } = useContext(AuthContext);

	let getAnnonces = async () => {
		let response = await fetch('http://127.0.0.1:8000/api/annonces/', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Token ' + json_auth_token,
			},
		});
		let data = await response.json();
		setAnnonceData(data);
	};
	let [annonces, setAnnonceData] = useState([]);

	useEffect(() => {
		getAnnonces();
	}, []);

	if (user) {
		return (
			<div className="full_height">
				<div className="container">
					<div className="connect_box  announce_box"></div>

					<div className="announce_box">
						<h2>Mes annonces</h2>
						<div className="form_box">
							<table class="styled-table">
								<thead>
									<tr>
										<th>Id</th>
										<th>Titre</th>
										<th>Categorie</th>
									</tr>
								</thead>
								<tbody>
									{annonces.length &&
										annonces.map((annonce) => (
											<tr key="{annonce.id}">
												{' '}
												<td>{annonce.id}</td>
												<td>
													<Link to={`/annonce/${annonce.id}`}>{annonce.title}</Link>
												</td>
												<td>{annonce.based_category}</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default ListAnnonces;
