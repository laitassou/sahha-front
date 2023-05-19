import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import SectionTitle from 'components/common/SectionTitle';
import { Location } from 'assets/icons/index';

import MAIN_URL from 'utils/constants';

import { useParams } from 'react-router-dom';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Selectable from './Calendar';
require('moment/locale/fr.js');
const localizer = momentLocalizer(moment);


interface User {
	id: number;
	agence_id: number;
	created_at: string;
	degree: string;
	email: string;
	updated_at: string;
	first_name: string;
	last_name: string;
	phone_number: string;
}

interface slot {
	id: number;
	annonce_id: number;
	title: string;
	description: string;
	intervenant: User;
}


interface AnnonceResponse {
	id: number;
	title: string;
	description: string;
}


interface event {
	id: number;
	title: string;
	start: string;
	end: string;
}

let data = []
const SingleAnnonce = () => {
	let [slots, setSlotsData] = useState<slot[]>([]);
	let [annonce, setAnnonceData] = useState<AnnonceResponse[]>([]);
	const auth = localStorage.getItem('authTokens') as string;

	const [event, setIntervenantId] = useState<event>();

	const auth_json = JSON.parse(auth);
	const json_auth_token = auth_json.token;
	const { user } = useContext(AuthContext);

	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		let getSingleAnnonce = async () => {
			let url = MAIN_URL + '/slots/' + id + '/';
			let response = await fetch(url, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Token ' + json_auth_token,
				},
			});

			data = await response.json();
			// pop annonce from response
			let ad = data.pop()
			setAnnonceData(ad);
			setSlotsData(data);
		};
		getSingleAnnonce();
	}, [id, json_auth_token]);

	if (!user) {
		return null;
	}
	let title = '';
	let detail = '';
	let person = '';
	if (auth_json.role === 'Worker') {
		title = 'Retour aux services';
		detail = 'Details de votre service';
		person = 'Client';
	}
	else {
		title = 'Retour aux annonces';
		detail = 'Details de votre annonce';
		person = 'Intervenant';
	}


	let intervenant = [];
	if (event) {
		if (event.id) {
			let slot = slots.filter((d) => d.id === event.id)[0];
			if (slot && slot.intervenant) {
				intervenant.push(slot.intervenant);
			} else if (auth_json.role === 'Manager') {
				person = "Choisir un intervenant";
			}
			else {
				person = "Intervenant pas encore affecté";
			}
		}
	}

	return (
		<div className="">
			<div className="container">
				<div className="connect_box announce_box"></div>
				<Link to="/list-annonces">
					<SectionTitle title={title} className="text-center" />
				</Link>

				<div className="announce_box overflow">
					<h2 className="text-2xl font-bold">{detail}</h2>

					{annonce.map((ads, i) => (
						<div key={i} className="w-full max-w-1xl pb-8">
							<div className="flex flex-col items-center px-4 py-6 text-center bg-white border rounded shadow-2xl md:text-left md:flex-row border-gray-200/30 shadow-gray-200/80">
								<h4 className="my-4 font-medium text-center break-all md:w-1/2 md:my-0 text-primary-500/50">
									{ads.title}
								</h4>
								<h4 className="my-4 font-medium text-center break-all md:w-1/2 md:my-0 text-primary-500/50">
									{ads.description}
								</h4>
							</div>
						</div>
					))}

					<h2 className="text-2xl font-bold">{person}</h2>
					{intervenant.map((iv, i) => (
						<div key={i} className="w-full max-w-1xl pb-8">
							<div className="flex flex-col items-center px-4 py-6 text-center bg-white border rounded shadow-2xl md:text-left md:flex-row border-gray-200/30 shadow-gray-200/80">
								<h4 className="my-4 font-medium text-center break-all md:w-1/2 md:my-0 text-primary-500/50">
									{iv.first_name}
								</h4>
								<h4 className="my-4 font-medium text-center break-all md:w-1/2 md:my-0 text-primary-500/50">
									{iv.last_name}
								</h4>
								<h4 className="my-4 font-medium text-center break-all md:w-1/2 md:my-0 text-primary-500/50">
									{iv.phone_number}
								</h4>
							</div>
						</div>
					))}

					<Selectable localizer={localizer} data={slots} anonceid={id} setIntervenantId={setIntervenantId} />
				</div>
			</div>
		</div>
	);
};

export default SingleAnnonce;
