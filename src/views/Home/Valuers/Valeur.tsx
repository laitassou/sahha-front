import { FC } from 'react';

interface Props {
	title: string;
	text: string;
	Icon: React.ReactNode;
}
const Valeur: FC<Props> = ({ Icon, title, text }) => {
	return (
		<div className="w-full pt-6 pb-10 pl-2 pr-0 border border-b-0 border-l-0 md:px-8 md:w-1/2 lg:w-1/3">
			<div className="h-full">
				{Icon}
				<h3 className="mb-4 text-xl font-semibold">{title}</h3>
				<p className="text-black/60">{text}</p>
			</div>
		</div>
	);
};

export default Valeur;
