import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterLink from './FooterLink';
import FooterLinksList from './FooterLinksList';

const Footer = () => {
	return (
		<footer className="pt-10 text-white border-t bg-slate-900">
			<div className="container flex flex-wrap justify-between pb-10 md:flex-row lg:px-20">
				<div className="flex flex-col">
					<NavLink to="/">
						<img alt="" src="assets/logo-004.png" />
					</NavLink>
					<p className="max-w-xs mt-3">
						Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin
						familial
					</p>
				</div>
				<div className="flex flex-wrap">
					<FooterLinksList title="Lien important">
						<FooterLink text="Nos agences" to="/#agences" />
						<FooterLink text="Fonctionnement" to="/#agences" />
						<FooterLink text="Valeurs" to="/#agences" />
						<FooterLink text="A Props" to="/#agences" />
					</FooterLinksList>
					<FooterLinksList title="Services">
						<FooterLink text="Service 1" to="/#agences" />
						<FooterLink text="Service 2" to="/#agences" />
						<FooterLink text="Service 3" to="/#agences" />
						<FooterLink text="Service 4" to="/#agences" />
					</FooterLinksList>
					<FooterLinksList title="Personel">
						<FooterLink text="Se connecter" to="/#agences" />
						<FooterLink text="Rejoindre" to="/#agences" />
					</FooterLinksList>
				</div>
			</div>
			<div className="container py-4 text-center border-t border-t-white/30">Sahha - 2023</div>
		</footer>
	);
};

export { Footer };
