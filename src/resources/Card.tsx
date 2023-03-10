import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

export const Card: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
	return (
		<div className={clsx('card', className)} {...rest}>
			{children}
		</div>
	);
};
