import { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface Props extends NavLinkProps {
	text: string;
}

const FooterLink: FC<Props> = ({ text, ...rest }) => {
	return (
		<li className="mb-4">
			<NavLink className="hover:text-primary-500" {...rest}>
				{text}
			</NavLink>
		</li>
	);
};

export default FooterLink;
