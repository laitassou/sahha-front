import React from 'react';
import SectionTitle from '../../../components/common/SectionTitle';
import { ReactComponent as HeartBeating } from '../../../assets/icons/heart-beating.svg';
import { ReactComponent as SuitCase } from '../../../assets/icons/suitcase.svg';
import { ReactComponent as Brain } from '../../../assets/icons/brain.svg';
import { ReactComponent as Tools } from '../../../assets/icons/tools.svg';

const valeurs = [
	{
		title: 'Valeur 1',
		text: "Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin familial",
		Component: <HeartBeating className="w-16 mb-4" />,
	},
	{
		title: 'Valeur 1',
		text: "Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin familial",
		Component: <SuitCase className="w-16 mb-4" />,
	},
	{
		title: 'Valeur 1',
		text: "Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin familial",
		Component: <Brain className="w-16 mb-4" />,
	},
	{
		title: 'Valeur 1',
		text: "Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin familial",
		Component: <Tools className="w-16 mb-4" />,
	},
];

const Valeurs = () => {
	return (
		<section id="valeurs" className="pb-40">
			<div className="container">
				<SectionTitle title="Nos valeurs" />
				<div className="flex flex-wrap">
					{valeurs.map((valeur) => (
						<div className="pb-6 pr-6 md:w-1/2 xl:w-1/4">
							<div className="h-full">
								{valeur.Component}
								<h3 className="mb-4 text-xl font-semibold">{valeur.title}</h3>
								<p className="text-black/60">{valeur.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Valeurs;
