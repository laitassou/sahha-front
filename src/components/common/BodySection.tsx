import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

const BodySection: FC<HTMLAttributes<HTMLElement>> = ({ children, className, ...rest }) => {
	return (
		<section className={clsx('pt-28 pb-14', className)} {...rest}>
			{children}
		</section>
	);
};

export { BodySection };
