import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import SectionTitle from 'components/common/SectionTitle';
import ListAnnonces_v2 from 'components/ListAnnonces_v2';
import ListClients from './ListClients';
import { BodySection } from 'components/common/BodySection';

import Profil from 'components/Profil';
import { Annonce } from 'views/Annonce';


const ProtectedPage = () => {
	const auth = localStorage.getItem('authTokens') as string;
	const auth_json = JSON.parse(auth);

	const [visible, setVisible] = useState(false);
	const [visible2, setVisible2] = useState(false);

	useEffect(() => {
		setVisible(true);
		setVisible2(true);
	}, []);

	const closeHandler = () => {
		const accordionItem = document.querySelector('.accordion-item');
		const content = accordionItem && accordionItem.querySelector('.accordion-content');

		accordionItem && accordionItem.classList.toggle('active');
		content && content.classList.toggle('hidden');
	}

	const closeAnnonce = () => {
		const accordion2Item = document.querySelector('.annonce-item');
		const content2 = accordion2Item && accordion2Item.querySelector('.annonce-content');

		accordion2Item && accordion2Item.classList.toggle('active');
		content2 && content2.classList.toggle('hidden');
	}


	function Client() {
		return (
			<>
				<section className="pt-28 pb-14 bg-blue-100 bg-opacity-50 ">

					<div className="flex justify-between gap-5">

						<div className="flex flex-col items-start gap-3 p-0 w-4/6">

							<div className="annonce w-full" >
								<div className="annonce-item bg-white rounded-md">
									<div className="annonce-title flex flex-row justify-between items-center py-5 px-5 w-full bg-white rounded-md" onClick={closeAnnonce}>
										<div className="font-raleway font-bold text-3xl leading-42 tracking-wider text-black flex-none order-0">Publier une nouvelle annonce
										</div>
										<button type="button" className="icon-button">
											<svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 12H16" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 16V8" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
										</button>
									</div>

									<div className="annonce-content hidden mb-5" style={{
										visibility: visible2 ? "visible" : "hidden",
										opacity: visible2 ? "1" : "0"
									}}>
										<Annonce />
									</div>
								</div>
							</div>


							<div className="accordion w-full">
								<div className="accordion-item bg-white rounded-md">
									<div className="accordion-title flex flex-row justify-between items-center py-5 px-5 w-full bg-white rounded-md" onClick={closeHandler}>
										<div className="font-raleway font-bold text-3xl leading-42 tracking-wider text-black flex-none order-0">Mes annonces
										</div>
										<button type="button" className="icon-button">
											<svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
												<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
												<g id="SVGRepo_iconCarrier">
													<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
													<path d="M8.46997 10.6399L12 14.1599L15.53 10.6399" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
												</g>
											</svg>
										</button>
									</div>

									<div className="accordion-content hidden mb-5" style={{
										visibility: visible ? "visible" : "hidden",
										opacity: visible ? "1" : "0"
									}}>

										<ListAnnonces_v2 />

									</div>

								</div>
							</div>


						</div>

						<div className="basis-2/6">
							<Profil type={"client"} />
						</div>
					</div>

				</section >


			</>
		);
	}


	function Worker() {
		return (
			<>
				<section className="pt-28 pb-14 bg-blue-100 bg-opacity-50 ">

					<div className="flex justify-between gap-5">

						<div className="flex flex-col items-start gap-3 p-0 w-4/6">

							<div className="annonce w-full" >
								<div className="annonce-item bg-white rounded-md">
									<div className="annonce-title flex flex-row justify-between items-center py-5 px-5 w-full bg-white rounded-md" onClick={closeAnnonce}>
										<div className="font-raleway font-bold text-3xl leading-42 tracking-wider text-black flex-none order-0">Proposer un service
										</div>
										<button type="button" className="icon-button">
											<svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 12H16" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 16V8" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
										</button>
									</div>

									<div className="annonce-content hidden mb-5" style={{
										visibility: visible2 ? "visible" : "hidden",
										opacity: visible2 ? "1" : "0"
									}}>
										<Annonce />
									</div>
								</div>
							</div>


							<div className="accordion w-full">
								<div className="accordion-item bg-white rounded-md">
									<div className="accordion-title flex flex-row justify-between items-center py-5 px-5 w-full bg-white rounded-md" onClick={closeHandler}>
										<div className="font-raleway font-bold text-3xl leading-42 tracking-wider text-black flex-none order-0">Mes Services
										</div>
										<button type="button" className="icon-button">
											<svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
												<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
												<g id="SVGRepo_iconCarrier">
													<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
													<path d="M8.46997 10.6399L12 14.1599L15.53 10.6399" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
												</g>
											</svg>
										</button>
									</div>

									<div className="accordion-content hidden mb-5" style={{
										visibility: visible ? "visible" : "hidden",
										opacity: visible ? "1" : "0"
									}}>

										<ListAnnonces_v2 />

									</div>

								</div>
							</div>


						</div>

						<div className="basis-2/6">
							<Profil type={"worker"} />
						</div>
					</div>

				</section >


			</>
		);
	}

	function Manager() {
		return (
			<>
				<section className="pt-28 pb-14 bg-blue-100 bg-opacity-50 ">

					<div className="flex justify-between gap-5">

						<div className="flex flex-col items-start gap-3 p-0 w-4/6">

							<div className="annonce w-full" >
								<div className="annonce-item bg-white rounded-md">
									<div className="annonce-title flex flex-row justify-between items-center py-5 px-5 w-full bg-white rounded-md" onClick={closeAnnonce}>
										<div className="font-raleway font-bold text-3xl leading-42 tracking-wider text-black flex-none order-0">Clients
										</div>
										<button type="button" className="icon-button">
											<svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
												<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
												<g id="SVGRepo_iconCarrier">
													<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
													<path d="M8.46997 10.6399L12 14.1599L15.53 10.6399" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
												</g>
											</svg>
										</button>
									</div>

									<div className="annonce-content hidden mb-5" style={{
										visibility: visible2 ? "visible" : "hidden",
										opacity: visible2 ? "1" : "0"
									}}>
										<ListClients type={"clients"} />
									</div>
								</div>
							</div>

							<div className="accordion w-full">
								<div className="accordion-item bg-white rounded-md">
									<div className="accordion-title flex flex-row justify-between items-center py-5 px-5 w-full bg-white rounded-md" onClick={closeHandler}>
										<div className="font-raleway font-bold text-3xl leading-42 tracking-wider text-black flex-none order-0">Intervenants
										</div>
										<button type="button" className="icon-button">
											<svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
												<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
												<g id="SVGRepo_iconCarrier">
													<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
													<path d="M8.46997 10.6399L12 14.1599L15.53 10.6399" stroke="#2B67F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
												</g>
											</svg>
										</button>
									</div>

									<div className="accordion-content hidden mb-5" style={{
										visibility: visible ? "visible" : "hidden",
										opacity: visible ? "1" : "0"
									}}>

										<ListClients type={"prestataires"} />

									</div>

								</div>
							</div>


						</div>

						<div className="basis-2/6">
							<Profil type={"manager"} />
						</div>
					</div>

				</section >
			</>
		);
	}

	function out_links() {
		if (auth_json) {
			if (auth_json.role === 'Client') {
				return Client();
			}
			else if (auth_json.role === 'Worker') {
				return Worker();

			} else if (auth_json.role === 'Manager') {
				return Manager();
			} else {
				return;
			}
		}
	}

	return (
		<nav>
			<div className="full_height">
				<div className="container">
					<div className="connect_box announce_box personal-space">{out_links()}</div>
				</div>
			</div>
		</nav>
	);
};

export default ProtectedPage;
