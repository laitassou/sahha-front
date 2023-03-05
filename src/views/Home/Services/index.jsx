import SectionTitle from 'components/common/SectionTitle';
import ServiceSingle from './ServiceSingle';
import {
	Accompagnement,
	Hospitalisation,
	Injection,
	Kinésitherapie,
	Pansements,
	Sang,
	Soin,
	Sonde,
} from 'assets/icons';
import { BodySection } from 'components/common/BodySection';

const Services = () => {
	return (
		<BodySection id="services">
			<div className="container">
				<SectionTitle title="Nos Services" className="text-center" />
				<div className="flex flex-wrap">
					<ServiceSingle icon={<Injection />} title="Compagnie">
						becare vous offre tous les types d&apos;injections dont vous aurez besoin, assurés par des infirmiers
						expérimentés
					</ServiceSingle>
					<ServiceSingle icon={<Sonde />} title="Repas">
						Selon votre cas, votre médecin vous précise le type de sonde dont vous avez besoin, et c&apos;est à becare
						de vous envoyer le professionnel qui va vous prendre en charge
					</ServiceSingle>
					<ServiceSingle icon={<Pansements />} title="Soins">
						Pour tout type de pansements, becare vous envoie des infirmiers compétents qui vont vous prendre en charge à
						votre domicile
					</ServiceSingle>
					<ServiceSingle icon={<Soin />} title="Courses">
						Si vous avez besoin d&apos;assistance pour vos soins d&apos;hygiène, becare vous propose des aides soignants
						qui se déplacent chez vous
					</ServiceSingle>
					<ServiceSingle icon={<Hospitalisation />} title="Intimité">
						Ce service est dédié aux personnes qui préfèrent être hospitalisées à leur domicile. Pour bénéficier de tous
						les soins comme à l&apos;hôpital chez vous, vous devez demander l&apos;accord du médecin
					</ServiceSingle>
					<ServiceSingle icon={<Kinésitherapie />} title="Ménage">
						becare est à votre service pour tout type de rééducation, les séances de kiné sont assurées par des
						professionnels du domaine, ainsi nos infirmiers vous aident à se soigner selon les règles professionnelles.
					</ServiceSingle>
					<ServiceSingle icon={<Sang />} title="Hopital">
						Votre infirmier(e) becare avec maîtrise et compétence de toute prise de sang se charge de votre prélèvement
						à domicile, puis il transmet l'échantillon au laboratoire dans les plus brefs délais.
					</ServiceSingle>
					<ServiceSingle icon={<Accompagnement />} title="Sortie">
						becare vous propose des infirmiers compétents pour votre accompagnement à domicile, vos soins du corps,
						soins médicaux, administration de médicaments et autres{' '}
					</ServiceSingle>
				</div>
			</div>
		</BodySection>
	);
};

export default Services;
