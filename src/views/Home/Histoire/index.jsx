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
						Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin
						familial.
					</p>
					<p className="mt-4">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae illo nobis aperiam, consequuntur quasi
						architecto, dignissimos minus porro maxime mollitia laboriosam quis similique voluptatum suscipit quibusdam
						eveniet corporis sit! Repellat?
					</p>
				</div>

				<div className="max-w-xs mx-auto mb-6">
					<img src="/assets/illustrations/about.png" alt="About png" />
				</div>
				<Button>Rejoignez nous</Button>
			</div>
		</BodySection>
	);
};

export default Histoire;
