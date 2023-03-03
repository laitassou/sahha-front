import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = ({ children, to }) => {
	return (
		<NavLink
			className="inline-flex items-center justify-center w-full h-full mr-5 text-sm font-semibold transition duration-300 xl:text-base hover:text-primary-500"
			to={to}
		>
			{children}
		</NavLink>
	);
};
export default NavBarLink;
