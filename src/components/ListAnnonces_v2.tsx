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
	addresse: string;
}



const ListAnnonces_v2: FC = () => {
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
		<> {
			annonces.map((annonce, i) => (
				<div className="flex flex-col justify-center items-center py-2 px-2 pb-2 gap-2  bg-opacity-20 bg-blue-200 rounded-md m-5">
					<div className="flex flex-col items-start gap-1 p-0 w-full">

						<div className="flex flex-row justify-between items-start gap-10 p-0 w-full">

							<div className="flex flex-row justify-between items-start gap-10 p-0 ">
								<Link to={`/annonce/${annonce.id}`}>

									<span className="font-raleway font-bold text-20 leading-23 tracking-wider text-black">
										{annonce.title}</span>
								</Link>
							</div>
							<div className="flex flex-row items-end gap-30 p-0 ">
								<button type="button" className="icon-button mr-5">
									<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.16998 14.83L14.83 9.17004" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.83 14.83L9.16998 9.17004" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
								</button>
								<button type="button" className="icon-button">
									<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z" stroke="#2B67F6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899" stroke="#2B67F6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
								</button>
							</div>
						</div>
						<div className="flex flex-row justify-between items-start gap-2 p-0">
							<div className=" font-raleway font-normal text-18 leading-21 tracking-wide text-blue-500 flex-none order-1 flex-grow-0">créee: {annonce.created}<span>/</span>
							</div>
							<div className="font-raleway font-normal text-18 leading-21 tracking-wide text-blue-500 flex-none order-1 flex-grow-0">mise à jour: {annonce.created}
							</div>
						</div>
						<div className="flex flex-col items-start gap-10 p-0">
							<p className="font-raleway font-normal text-18 leading-21 tracking-wider text-black w-650 h-84">{annonce.description}</p>
						</div>

						<div className="flex flex-col items-start gap-10 p-0">
							<p className="font-raleway font-normal text-18 leading-21 tracking-wider text-black w-650 h-84">addresse: {annonce.addresse}</p>
						</div>
					</div>
				</div >
			))
		}
		</>

	);
};

export default ListAnnonces_v2;
