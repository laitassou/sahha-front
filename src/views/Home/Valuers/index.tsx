import SectionTitle from 'components/common/SectionTitle';
import Valeur from './Valeur';
import { Brain, HeartBeating, SuitCase } from 'assets/icons';
import { BodySection } from 'components/common/BodySection';

const valeurs = [
	{
		title: 'Engagement',
		text: "Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin familial",
		Icon: <HeartBeating className="w-16 mb-4" />,
	},
	{
		title: 'Qualité',
		text: "Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin familial",
		Icon: <SuitCase className="w-16 mb-4" />,
	},
	{
		title: 'Suivi',
		text: "Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin familial",
		Icon: <Brain className="w-16 mb-4" />,
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
