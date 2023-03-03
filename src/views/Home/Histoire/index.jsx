import React from 'react';
import SectionTitle from '../../../components/common/SectionTitle';

const Histoire = () => {
	return (
		<section id="histoire" className="pb-40 lg:text-center">
			<div className="container flex-col items-center justify-center">
				<SectionTitle title="Notre histoire" className="lg:items-center">
					Autour de la temathique de famille et dependance et aide à la personner Notre histoire est née d'un besoin
					familial,
					<p className="mt-2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae illo nobis aperiam, consequuntur quasi
						architecto, dignissimos minus porro maxime mollitia laboriosam quis similique voluptatum suscipit quibusdam
						eveniet corporis sit! Repellat?
					</p>
				</SectionTitle>
				<div className="max-w-xs mx-auto">
					<img src="/assets/illustrations/about.png" alt="About png" />
				</div>
			</div>
		</section>
	);
};

export default Histoire;
