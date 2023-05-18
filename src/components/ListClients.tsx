import React, { useState, useEffect, useContext, FC } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import SectionTitle from 'components/common/SectionTitle';
import { Location } from 'assets/icons/index';
import { BodySection } from 'components/common/BodySection';

import MAIN_URL from 'utils/constants';

interface ClientResponse {
	id: number;
	first_name: string;
	last_name: string;
	phone_number: string;
	role: string;
}
const ListClients: FC = () => {
	const auth = localStorage.getItem('authTokens') as string;
	const auth_json = JSON.parse(auth);
	const json_auth_token = auth_json.token;
	const { user } = useContext(AuthContext);
	let [clients, setClientData] = useState<ClientResponse[]>([]);

	const { type } = useParams<{ type: string }>();


	let endpoint = '';
	let title = 'Clients';
	if (type === 'clients') {
		endpoint = 'Client';
	}
	else {
		endpoint = 'Worker';
		title = 'Intervenants';
	}

	let getClients = async () => {
		let response = await fetch(MAIN_URL + '/users/' + endpoint + '/', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Token ' + json_auth_token,
			},
		});
		let data = await response.json();
		setClientData(data);
	};

	useEffect(() => {
		getClients();
	}, []);

	if (!user) {
		return null;
	}


	return (
		<BodySection id="agences" className="px-0 lg:px-40">
			<div className="container">
				<SectionTitle title={title} className="text-center" />
				<div className="flex flex-wrap justify-center">
					{clients.map((client, i) => (
						<div key={i} className="w-full max-w-4xl pb-8">
							<div className="flex flex-col items-center px-4 py-6 text-center bg-white border rounded shadow-2xl md:text-left md:flex-row border-gray-200/30 shadow-gray-200/80">
								<Location className="transition duration-300 w-14 text-secondary-500" />
								<h3 className="text-xl font-semibold break-all lg:w-1/4 md:pl-4">{client.id}</h3>
								<h4 className="my-4 font-medium text-center break-all md:w-1/4 md:my-0 text-primary-500/50">
									{client.phone_number}
								</h4>
								<p className="text-gray-500 break-all md:w-2/4">
									<Link to={`/annonce/${client.id}`}>{client.first_name}</Link>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</BodySection>
	);
};

export default ListClients;
