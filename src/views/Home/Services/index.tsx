import SectionTitle from 'components/common/SectionTitle';
import ServiceSingle from './ServiceSingle';
import {
	Accompagnement,
	Intimite,
	Compagnie,
	Menage,
	Soins,
	Hopital,
	Courses,
	Sonde,
} from 'assets/icons';
import { BodySection } from 'components/common/BodySection';

const Services = () => {
	return (
		<BodySection id="services">
			<div className="container">
				<SectionTitle title="Nos Services" className="text-center" />
				<div className="flex flex-wrap">
					<ServiceSingle icon={<Compagnie />} title="Accompagnement">
						Besoin d'accompagnement, récuperer les enfants à l'école, effectuer des demarches, ...
					</ServiceSingle>
					<ServiceSingle icon={<Sonde />} title="Repas">
						On peut selectionner des aides a domiciles pour vous aider à preparer vos repas.
					</ServiceSingle>
					<ServiceSingle icon={<Soins />} title="Soins">
						Chercher ses medicaments en pharmacie, une prise de sang, ...
					</ServiceSingle>
					<ServiceSingle icon={<Courses />} title="Courses">
						pour faire vos courses, achat divers ou encombrants. nous avons la solution qu'il vous faut.
					</ServiceSingle>
					<ServiceSingle icon={<Intimite />} title="Intimité">
						Ce service est dédié aux personnes dependantes, une aide à domicile peut venir vous aider a prendre le bain
					</ServiceSingle>
					<ServiceSingle icon={<Menage />} title="Ménage">
						Vous avez besoin d'aide au menage, ponctuel ou regulier. Nous vous trouvons des personnes adaptées.
					</ServiceSingle>
					<ServiceSingle icon={<Hopital />} title="Hopital">
						Si vous avez besoin d&apos;assistance , sortie d'hopital ou accompagnement à l'hopital.
					</ServiceSingle>
					<ServiceSingle icon={<Accompagnement />} title="Sortie">
						Ce service est adaptée aux personnes agées ou dependantes, nous proposons des personnes à l 'écoute pour sortie et accompagnement.

					</ServiceSingle>
				</div>
			</div>
		</BodySection>
	);
};

export default Services;
