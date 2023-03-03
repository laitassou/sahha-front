import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterLink = ({ text, to }) => {
	return (
		<NavLink className="hover:text-primary-500" to={to}>
			{text}
		</NavLink>
	);
};

export default FooterLink;
