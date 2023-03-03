import React from 'react';
import clsx from 'clsx';

const SectionTitle = ({ title, children, className }) => {
	return (
		<div className={clsx('flex flex-col mb-10', className)}>
			<h3 className="mb-3 text-4xl font-bold text-primary-500">{title}</h3>
			{children && <p className="max-w-2xl text-lg">{children}</p>}
		</div>
	);
};

export default SectionTitle;
