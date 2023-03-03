import SectionTitle from 'components/common/SectionTitle';
import { ReactComponent as HeartBeating } from 'assets/icons/heart-beating.svg';
import { ReactComponent as SuitCase } from 'assets/icons/suitcase.svg';
import { ReactComponent as Brain } from 'assets/icons/brain.svg';
import { ReactComponent as Tools } from 'assets/icons/tools.svg';
import Valeur from './Valeur';

const valeurs = [
	{
		title: 'Valeur 1',
		text: "Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin familial",
		Icon: <HeartBeating className="w-16 mb-4" />,
	},
	{
		title: 'Valeur 1',
		text: "Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin familial",
		Icon: <SuitCase className="w-16 mb-4" />,
	},
	{
		title: 'Valeur 1',
		text: "Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin familial",
		Icon: <Brain className="w-16 mb-4" />,
	},
	{
		title: 'Valeur 1',
		text: "Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin familial",
		Icon: <Tools className="w-16 mb-4" />,
	},
	{
		title: 'Valeur 1',
		text: "Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin familial",
		Icon: <Tools className="w-16 mb-4" />,
	},
	{
		title: 'Valeur 1',
		text: "Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin familial",
		Icon: <Tools className="w-16 mb-4" />,
	},
];

const Valeurs = () => {
	return (
		<section id="valeurs" className="pb-40">
			<div className="container">
				<SectionTitle title="Nos valeurs" />
				<div className="overflow-hidden md:-translate-x-6">
					<div className="flex flex-wrap h-full translate-x-0.5 -translate-y-0.5">
						{valeurs.map((valeur) => (
							<Valeur {...valeur} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Valeurs;
