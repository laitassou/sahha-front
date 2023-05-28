import React, { useState, useEffect, useContext, FC } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

import SectionTitle from 'components/common/SectionTitle';
import { Location } from 'assets/icons/index';
import { BodySection } from 'components/common/BodySection';
import { useParams } from 'react-router-dom';

import MAIN_URL from 'utils/constants';

interface AnnonceResponse {
	id: number;
	title: string;
	description: string;
	created: string;
	updated: string;
}



const ListAnnonces: FC = () => {
	const auth = localStorage.getItem('authTokens') as string;
	const auth_json = JSON.parse(auth);
	const json_auth_token = auth_json.token;
	const { user } = useContext(AuthContext);
	let [annonces, setAnnonceData] = useState<AnnonceResponse[]>([]);

	//user id optional
	const { id } = useParams<{ id: string }>();

	let build_url = MAIN_URL + '/annonces/';
	if (id) {
		build_url = build_url + id + '/';
	}
	let getAnnonces = async () => {
		let response = await fetch(build_url, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Token ' + json_auth_token,
			},
		});
		let data = await response.json();
		setAnnonceData(data);
	};

	let title = '';



	useEffect(() => {
		getAnnonces();
	}, []);

	if (!user) {
		return null;
	}

	if (auth_json.role === 'Worker') {
		title = 'Mes services'
	}
	else if (auth_json.role == 'Client') {
		title = 'Mes annonces'
	}
	else {
		title = 'Annonces client'
	}
	return (
		<BodySection id="agences" className="px-0 ">
			<div className="container">
				<SectionTitle title={title} className="text-center" />
				<div className="flex flex-wrap justify-center">
					{annonces.map((annonce, i) => (
						<div key={i} className="w-full max-w-4xl pb-8">
							<div className="flex flex-col items-center px-4 py-6 text-center bg-white border rounded shadow-2xl md:text-left md:flex-row border-gray-200/30 shadow-gray-200/80">
								<p className="text-gray-500 break-all md:w-4/4">
									<Link to={`/annonce/${annonce.id}`}>{annonce.title}</Link>
								</p>
							</div>

							<div className="flex flex-col items-center px-4 py-6 text-center bg-white border rounded shadow-2xl md:text-left md:flex-row border-gray-200/30 shadow-gray-200/80">
								<p className="text-gray-500 break-all md:w-4/4">
									<Link to={`/annonce/${annonce.id}`}>{annonce.description}</Link>
								</p>
							</div>

						</div>
					))}
				</div>
			</div>
		</BodySection>
	);
};

export default ListAnnonces;
