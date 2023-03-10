import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { FormControlError } from './FormControlError';

export interface FormControlProps {
	error?: string;
	isTextArea?: boolean;
}

const FormControl: FC<FormControlProps & HTMLAttributes<HTMLDivElement>> = ({
	children,
	error,
	className,
	isTextArea,
	...rest
}) => {
	return (
		<>
			<div
				className={clsx(
					'relative transition bg-gray-100 border-2 border-transparent rounded hover:border-primary-500 focus-within:!border-primary-500',
					{
						className,
						'!border-red-400': error,
						'h-14': !isTextArea,
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
