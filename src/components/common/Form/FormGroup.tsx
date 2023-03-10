import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

const FormGroup: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
	return (
		<div className={clsx('w-full flex flex-col', className)} {...rest}>
			{children}
		</div>
	);
};

export { FormGroup };
