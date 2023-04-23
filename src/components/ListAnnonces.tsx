import React, { useState, useEffect, useContext, FC } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

import SectionTitle from 'components/common/SectionTitle';
import { Location } from 'assets/icons/index';
import { BodySection } from 'components/common/BodySection';

import MAIN_URL from 'utils/constants';

interface AnnonceResponse {
	id: number;
	title: string;
	based_category: string;
}

const ListAnnonces: FC = () => {
	const auth = localStorage.getItem('authTokens') as string;
	const auth_json = JSON.parse(auth);
	const json_auth_token = auth_json.token;
	const { user } = useContext(AuthContext);
	let [annonces, setAnnonceData] = useState<AnnonceResponse[]>([]);

	let getAnnonces = async () => {
		let response = await fetch(MAIN_URL + '/annonces/', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Token ' + json_auth_token,
			},
		});
		let data = await response.json();
		setAnnonceData(data);
	};

	useEffect(() => {
		getAnnonces();
	}, []);

	if (!user) {
		return null;
	}
	return (
		<BodySection id="agences" className="px-0 lg:px-40">
			<div className="container">
				<SectionTitle title="Mes annonces" className="text-center" />
				<div className="flex flex-wrap justify-center">
					{annonces.map((annonce, i) => (
						<div key={i} className="w-full max-w-4xl pb-8">
							<div className="flex flex-col items-center px-4 py-6 text-center bg-white border rounded shadow-2xl md:text-left md:flex-row border-gray-200/30 shadow-gray-200/80">
								<Location className="transition duration-300 w-14 text-secondary-500" />
								<h3 className="text-xl font-semibold break-all lg:w-1/4 md:pl-4">{annonce.id}</h3>
								<h4 className="my-4 font-medium text-center break-all md:w-1/4 md:my-0 text-primary-500/50">
									{annonce.based_category}
								</h4>
								<p className="text-gray-500 break-all md:w-2/4">
									<Link to={`/annonce/${annonce.id}`}>{annonce.title}</Link>
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
