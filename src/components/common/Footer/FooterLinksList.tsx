import { FC, PropsWithChildren } from 'react';

interface Props {
	title: string;
}
const FooterLinksList: FC<PropsWithChildren<Props>> = ({ title, children }) => {
	return (
		<div className="mr-10 lg:mr-32">
			<h2 className="mt-10 mb-6 text-sm font-semibold uppercase ">{title}</h2>
			<ul className="text-gray-500 ">{children}</ul>
		</div>
	);
};

export default FooterLinksList;
