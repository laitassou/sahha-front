import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { FormControlError } from './FormControlError';

export interface FormControlProps {
	error?: string;
}

const FormControl: FC<FormControlProps & HTMLAttributes<HTMLDivElement>> = ({
	children,
	error,
	className,
	...rest
}) => {
	return (
		<>
			<div
				className={clsx(
					'relative transition bg-gray-100 border-2 border-transparent rounded hover:border-primary-500 focus-within:!border-primary-500 h-14',
					{
						className,
						'!border-red-400': error,
					},
				)}
				{...rest}
			>
				{children}
			</div>
			<span className="h-5">{error && <FormControlError>{error}</FormControlError>}</span>
		</>
	);
};

export { FormControl };
