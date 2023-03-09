import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

const FormLabel: FC<HTMLAttributes<HTMLLabelElement>> = ({ children, className, ...rest }) => {
	return (
		<label className={clsx('mb-2 text-sm font-bold  ', className)} {...rest}>
			{children}
		</label>
	);
};

export { FormLabel };
