import { NavLink } from 'react-router-dom';

const FooterLink = ({ text, to }) => {
	return (
		<li className="mb-4">
			<NavLink className="hover:text-primary-500" to={to}>
				{text}
			</NavLink>
		</li>
	);
};

export default FooterLink;
