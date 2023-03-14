import { BodySection } from 'components/common/BodySection';
import Button from 'components/common/Button';
import SectionTitle from 'components/common/SectionTitle';

const Histoire = () => {
	return (
		<BodySection id="apropos" className="lg:text-center">
			<div className="container flex-col items-center justify-center">
				<SectionTitle title="Notre histoire" className="lg:items-center" />
				<div className="max-w-2xl mx-auto mb-10 text-lg">
					<p>
						Autour de la thematique de la famille et dependance et aide à la personne, Notre histoire est née d'un besoin
						familial.
					</p>
					<p className="mt-4">
						Nos proposons des services ponctuels ou reguliers et nous nous adaptons à vos besoins
					</p>
				</div>

				<div className="max-w-xs mx-auto mb-6">
					<img src="/assets/illustrations/histoire-img.svg" alt="About png" />
				</div>
				<Button>Rejoignez nous</Button>
			</div>
		</BodySection>
	);
};

export default Histoire;
