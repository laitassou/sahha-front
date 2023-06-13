import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import SectionTitle from 'components/common/SectionTitle';
import { Location } from 'assets/icons/index';

import ClientResponse from 'components/commonInterfaces';

import MAIN_URL from 'utils/constants';

import { useParams } from 'react-router-dom';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Selectable from './Calendar';

import FeedbackComponent from 'components/Feedback';

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
	django_id: number;
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

const ListSlots = () => {
	let [slots, setSlotsData] = useState<slot[]>([]);
	const auth = localStorage.getItem('authTokens') as string;



	const auth_json = JSON.parse(auth);
	const json_auth_token = auth_json.token;
	const { user } = useContext(AuthContext);
	const { id } = useParams<{ id: string }>();

	const fake_id = -1;
	const fake_intervenant_id = -1;

	useEffect(() => {
		let getSlots = async () => {
			let url = MAIN_URL + '/slots/worker/' + id + '/';
			let response = await fetch(url, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Token ' + json_auth_token,
				},
			});

			data = await response.json();
			setSlotsData(data);
		};


		getSlots();


	}, [id, json_auth_token]);



	if (!user) {
		return null;
	}
	let title = '';
	let detail = '';
	let person = '';

	title = 'Retour aux services';
	detail = 'Details de votre service';
	person = 'Client';





	return (
		<div className="">
			<div className="container">
				<div className="connect_box announce_box"></div>
				<Link to="/monespace">
					<SectionTitle title={title} className="text-center" />
				</Link>
				<div className="announce_box overflow">
					<h2 className="text-2xl font-bold">{detail}</h2>




					<Selectable localizer={localizer} data={slots} anonceid={fake_id} setIntervenantId={fake_intervenant_id} />
				</div>
			</div>
		</div>
	);
};

export default ListSlots;
