import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

const Service: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
	return (
		<div className={clsx('p-4 mb-4 mr-4 bg-white border rounded shadow-lg', className)} {...rest}>
			{children}
		</div>
	);
};

export default Service;
