import SectionTitle from 'components/common/SectionTitle';
import Valeur from './Valeur';
import { Engagement, Qualite, Suivi, Tools } from 'assets/icons';
import { BodySection } from 'components/common/BodySection';

const valeurs = [
	{
		title: 'Engagement',
		text: "Nous veillons à rendre votre quotidien plus simple, à aider vos proches. Nous selectionnons des personnes avec des profils étudiés et adaptés",
		Icon: <Engagement className="w-16 mb-4" />,
	},
	{
		title: 'Qualité',
		text: "Nous assurons un service de qualité et un service adapté a vos besoins. Nous somme à l'écoute pour améliorer nos services",
		Icon: <Qualite className="w-16 mb-4" />,
	},
	{
		title: 'Suivi',
		text: "Nous effectuons une prise en charge dès le premier contact, nous etudions avec soin vos besoins et via votre espace nous fournissons un suivi régulier",
		Icon: <Suivi className="w-16 mb-4" />,
	},
];

const Valeurs = () => {
	return (
		<BodySection id="valeurs">
			<div className="container">
				<SectionTitle title="Nos valeurs" />
				<div className="overflow-hidden md:-translate-x-6">
					<div className="flex flex-wrap h-full translate-x-0.5 -translate-y-0.5">
						{valeurs.map((valeur, i) => (
							<Valeur key={i} {...valeur} />
						))}
					</div>
				</div>
			</div>
		</BodySection>
	);
};

export default Valeurs;
