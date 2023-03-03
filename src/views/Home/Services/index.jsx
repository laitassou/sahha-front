import React from 'react';
import SectionTitle from '../../../components/common/SectionTitle';
import ServiceSingle from './ServiceSingle';
import { ReactComponent as Injection } from '../../../assets/icons/injection.svg';
import { ReactComponent as Sonde } from '../../../assets/icons/sonde.svg';
import { ReactComponent as Pansements } from '../../../assets/icons/pansements.svg';
import { ReactComponent as Soin } from '../../../assets/icons/soin.svg';
import { ReactComponent as Hospitalisation } from '../../../assets/icons/hospatilisation.svg';
import { ReactComponent as Kinésitherapie } from '../../../assets/icons/kinésitherapie.svg';
import { ReactComponent as Sang } from '../../../assets/icons/sang.svg';
import { ReactComponent as Accompagnement } from '../../../assets/icons/accompagnement.svg';

const Services = () => {
	return (
		<section id="services" className="pb-40">
			<div className="container">
				<SectionTitle title="Nos Services" className="text-center" />
				<div className="flex flex-wrap">
					<ServiceSingle icon={<Injection />} title="Injections">
						becare vous offre tous les types d&apos;injections dont vous aurez besoin, assurés par des infirmiers
						expérimentés
					</ServiceSingle>
					<ServiceSingle icon={<Sonde />} title="Sonde">
						Selon votre cas, votre médecin vous précise le type de sonde dont vous avez besoin, et c&apos;est à becare
						de vous envoyer le professionnel qui va vous prendre en charge
					</ServiceSingle>
					<ServiceSingle icon={<Pansements />} title="Pansements">
						Pour tout type de pansements, becare vous envoie des infirmiers compétents qui vont vous prendre en charge à
						votre domicile
					</ServiceSingle>
					<ServiceSingle icon={<Soin />} title="Soin D'hygiène">
						Si vous avez besoin d&apos;assistance pour vos soins d&apos;hygiène, becare vous propose des aides soignants
						qui se déplacent chez vous
					</ServiceSingle>
					<ServiceSingle icon={<Hospitalisation />} title="Hospitalisation À Domicile">
						Ce service est dédié aux personnes qui préfèrent être hospitalisées à leur domicile. Pour bénéficier de tous
						les soins comme à l&apos;hôpital chez vous, vous devez demander l&apos;accord du médecin
					</ServiceSingle>
					<ServiceSingle icon={<Kinésitherapie />} title="Kinésithérapie">
						becare est à votre service pour tout type de rééducation, les séances de kiné sont assurées par des
						professionnels du domaine, ainsi nos infirmiers vous aident à se soigner selon les règles professionnelles.
					</ServiceSingle>
					<ServiceSingle icon={<Sang />} title="Prise De Sang">
						Votre infirmier(e) becare avec maîtrise et compétence de toute prise de sang se charge de votre prélèvement
						à domicile, puis il transmet l'échantillon au laboratoire dans les plus brefs délais.
					</ServiceSingle>
					<ServiceSingle icon={<Accompagnement />} title="Accompagnement À Domicile">
						becare vous propose des infirmiers compétents pour votre accompagnement à domicile, vos soins du corps,
						soins médicaux, administration de médicaments et autres{' '}
					</ServiceSingle>
				</div>
			</div>
		</section>
	);
};

export default Services;
