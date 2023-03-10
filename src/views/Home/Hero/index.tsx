import { BodySection } from 'components/common/BodySection';
import Service from './Service';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<BodySection id="hero" className="!pt-32">
			<div className="container flex flex-col items-start justify-between lg:flex-row">
				<div className="flex flex-col items-start">
					<span className="px-4 py-1 font-bold text-white uppercase rounded bg-secondary-500">SAHHA</span>
					<h1 className="max-w-2xl mt-2 mb-10 text-6xl font-black">Plateforme d'aide à la personne</h1>
					<div className="flex flex-wrap max-w-xl mt-6 mb-10">
						<Service>Pour vous, vos proches </Service>
						<Service>Sans vous déplacer</Service>
						<Service>Service régulier ou ponctuel</Service>
						<Service>Frais maitrisés</Service>
						<Service>Meilleure qualité garantie</Service>
						<Service>Suivi à distance</Service>
					</div>
					<Link to="/signup"> <Button>Nous rejoindre</Button> </Link>
				</div>
				<div className="h-auto max-w-lg mt-6 lg:mt-0">
					<img className="object-contain w-full h-full" src="/assets/illustrations/main-img.svg" alt="Hero SVG" />
				</div>
			</div>
		</BodySection>
	);
};

export default Hero;
