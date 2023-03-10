import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	error: string;
}

const FormError: FC<Props> = ({ error, className, ...rest }) => {
	if (!error) {
		return null;
	}
	return (
		<p className={clsx('w-full p-4 mb-6 leading-4 text-white bg-red-500 rounded', className)} {...rest}>
			{error}
		</p>
	);
};

export default FormError;
