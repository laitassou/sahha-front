import React from 'react';

const NavBarLink = ({ children, to }) => {
	return (
		<a
			className="inline-flex items-center justify-center w-full h-full mr-5 text-sm font-semibold transition duration-300 xl:text-base hover:text-primary-500"
			href={to}
		>
			{children}
		</a>
	);
};
export default NavBarLink;
