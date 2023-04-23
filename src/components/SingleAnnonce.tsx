import { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import SectionTitle from 'components/common/SectionTitle';

import MAIN_URL from 'utils/constants';

import { useParams } from 'react-router-dom';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Selectable from './Calendar';
require('moment/locale/fr.js');
const localizer = momentLocalizer(moment);

interface slots {
	id: number;
	annonce_id: number;
	title: string;
	description: string;
}

const SingleAnnonce = () => {
	let [slots, setSlotsData] = useState<slots[]>([]);
	const auth = localStorage.getItem('authTokens') as string;

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
			let data = await response.json();
			setSlotsData(data);
		};
		getSingleAnnonce();
	}, [id, json_auth_token]);

	if (!user) {
		return null;
	}

	return (
		<div className="">
			<div className="container">
				<div className="connect_box announce_box"></div>
				<Link to="/list-annonces">
					<SectionTitle title="Retour aux annonces" className="text-center" />
				</Link>

				<div className="container">
					<div className="announce_box">
						<h2>Details de votre annonce</h2>
						{
							<>
								<Selectable localizer={localizer} data={slots} anonceid={id} />
							</>
						}
					</div>
					<div className="navbar"></div>
				</div>
			</div>
		</div>
	);
};

export default SingleAnnonce;
