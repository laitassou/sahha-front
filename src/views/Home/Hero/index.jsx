import React from 'react';
import Service from './Service';
import Button from '../../../components/common/Button';

const Hero = () => {
	return (
		<section id="hero" className="pt-32 pb-60">
			<div className="container flex flex-col items-start justify-between lg:flex-row">
				<div className="flex flex-col items-start">
					<span className="font-bold uppercase text-primary-500">SAHHA</span>
					<h1 className="max-w-2xl mt-2 mb-10 text-6xl font-black">
						Première <span className="text-secondary-500">Plateforme</span> De{' '}
						<span className="text-secondary-500">Soins</span> À Domicile
					</h1>
					<div className="flex flex-col mt-6 mb-10">
						<div className="flex flex-wrap">
							<Service>Sans avance de frais</Service>
							<Service>Sans vous déplacer</Service>
						</div>
						<div className="flex flex-wrap">
							<Service>Meilleure qualité garantie</Service>
							<Service>En toute sécurité</Service>
						</div>
					</div>
					<Button>Prendre RDV</Button>
				</div>
				<div className="h-auto max-w-lg mt-6 lg:mt-0">
					<img className="object-contain w-full h-full" src="/assets/illustrations/hero.png" alt="Hero SVG" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
