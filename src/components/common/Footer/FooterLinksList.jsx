import React from 'react';

const FooterLinksList = ({ title, children }) => {
	return (
		<div className="mr-10 lg:mr-32">
			<h2 class="mb-6 text-sm font-semibold uppercase mt-10 ">{title}</h2>
			<ul class="text-gray-500 ">{children}</ul>
		</div>
	);
};

export default FooterLinksList;
