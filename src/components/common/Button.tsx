import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	secondary?: boolean;
}

const Button: FC<Props> = ({ children, className, secondary, ...rest }) => {
	return (
		<button
			className={clsx(
				'px-6 py-3 xl:px-10 lg:py-4 rounded-lg border-2 shadow-primary-500/30 transition-all duration-300',
				className,
				{
					'text-primary-500 bg-white border-primary-500': secondary,
					'text-white bg-primary-500 shadow hover:shadow-md hover:shadow-primary-500/60 border-transparent': !secondary,
				},
			)}
			{...rest}
		>
			{children}
		</button>
	);
};

Button.defaultProps = {
	type: 'button',
};

export default Button;
