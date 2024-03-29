import { useState, useEffect } from 'react';

import SectionTitle from 'components/common/SectionTitle';
import { Location } from 'assets/icons';
import { BodySection } from 'components/common/BodySection';
import MAIN_URL from 'utils/constants';

interface AgencesResponse {
	name: string;
	city: string;
	address: string;
}


function Agences() {
	let [agences, setAgencesData] = useState<AgencesResponse[]>([]);
	let getAgences = async () => {
		let response = await fetch(MAIN_URL + '/agences/', {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		let data = await response.json();
		setAgencesData(data);
	};

	useEffect(() => {
		getAgences();
	}, []);

	return (
		<BodySection id="agences" className="px-0 lg:px-40">
			<div className="container">
				<SectionTitle title="Nos Agences" className="text-center" />
				<div className="flex flex-wrap justify-center">
					{agences.map((ag, i) => (
						<div key={i} className="w-full max-w-4xl pb-8">
							<div className="flex flex-col items-center px-4 py-6 text-center bg-white border rounded shadow-2xl md:text-left md:flex-row border-gray-200/30 shadow-gray-200/80">
								<Location className="transition duration-300 w-14 text-secondary-500" />
								<h3 className="text-xl font-semibold break-all lg:w-1/4 md:pl-4">{ag.name}</h3>
								<h4 className="my-4 font-medium text-center break-all md:w-1/4 md:my-0 text-primary-500/50">
									{ag.city}
								</h4>
								<p className="text-gray-500 break-all md:w-2/4">{ag.address}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</BodySection>
	);
};

export default Agences;
