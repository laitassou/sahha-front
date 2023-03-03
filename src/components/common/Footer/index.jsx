import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterLink from './FooterLink';

const Footer = () => {
	return (
		<footer className="pt-10 border-t">
			<div className="container flex flex-wrap justify-between pb-10 md:flex-row lg:px-20">
				<div className="flex flex-col">
					<NavLink to="/">
						<img alt="" src="assets/logo-004.png" />
					</NavLink>
					<p className="max-w-xs mt-3">
						Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin
						familial,
					</p>
				</div>
				<div className="flex flex-wrap">
					<div className="mr-10">
						<h2 class="mb-6 text-sm font-semibold uppercase mt-10">Lien important</h2>
						<ul class="text-gray-500 dark:text-gray-400">
							<li class="mb-4">
								<FooterLink text="Nos agences" to="/#agences" />
							</li>
							<li class="mb-4">
								<FooterLink text="Fonctinnement" to="/#agences" />
							</li>
							<li class="mb-4">
								<FooterLink text="Valeurs" to="/#agences" />
							</li>
							<li class="mb-4">
								<FooterLink text="A Props" to="/#agences" />
							</li>
						</ul>
					</div>
					<div className="mr-10">
						<h2 class="mb-6 text-sm font-semibold uppercase mt-10">Services</h2>
						<ul class="text-gray-500 dark:text-gray-400">
							<li class="mb-4">
								<FooterLink text="Service 1" to="/#agences" />
							</li>
							<li class="mb-4">
								<FooterLink text="Service 2" to="/#agences" />
							</li>
							<li class="mb-4">
								<FooterLink text="Service 3" to="/#agences" />
							</li>
							<li class="mb-4">
								<FooterLink text="Service 4" to="/#agences" />
							</li>
						</ul>
					</div>
					<div className="mr-10">
						<h2 class="mb-6 text-sm font-semibold uppercase mt-10">Personel</h2>
						<ul class="text-gray-500 dark:text-gray-400">
							<li class="mb-4">
								<FooterLink text="Se connecter " to="/#agences" />
							</li>
							<li class="mb-4">
								<FooterLink text="Entregistrer" to="/#agences" />
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container py-4 text-center border-t">Sahha - 2023</div>
		</footer>
	);
};

export { Footer };
