import SectionTitle from 'components/common/SectionTitle';
import Step from './Step';

const steps = [
	'Notre agence prend contact avec vous pour évaluer vos besoins',
	'Nous vous proposon et choisir des profils adaptés, pévoir et valider un planning avec vous',
	'Prévoir et valider un planning avec vous',
	'Suivi des intreventions dans votre espace',
];
const Fonctionnement = () => {
	return (
		<section id="Fonctionnement" className="pb-40">
			<div className="container">
				<div className="flex justify-between">
					<div className="mt-5 mr-4">
						<SectionTitle title="Guide">
							Votre conseiller est votre interlocuteur unique dans votre agence. Il est à votre écoute et à votre
							disposition pour organiser le bon déroulement des prestations, mais aussi pour répondre à vos questions.
							<br />
							<br />
							Nous proposons des services à domicile sur mesure, assurés par des personnes aux profils adaptés, avec le
							souci constant de rendre le quotidien des personnes âgées plus agréable et de faciliter leur maintien à
							domicile.
						</SectionTitle>
						<div className="relative flex flex-col w-fit">
							<span className="absolute top-0 left-0 w-1 h-full translate-x-8 rounded-full md:translate-x-3 bg-secondary-500/20"></span>
							{steps.map((step, i) => (
								<Step key={i} text={step} number={i + 1} />
							))}
						</div>
					</div>
					<div className="hidden max-w-xl mt-32 lg:block">
						<img src="/assets/illustrations/guide.png" alt="Guide PNG" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Fonctionnement;
