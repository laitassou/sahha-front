import clsx from 'clsx';

const Button = ({ children, className, secondary }) => {
	return (
		<button
			className={clsx(
				'px-4 py-2 xl:px-10 lg:py-4 rounded-lg border-2 shadow-primary-500/30 transition-all duration-300',
				className,
				{
					'text-primary-500 bg-white border-primary-500': secondary,
					'text-white bg-primary-500 shadow hover:shadow-md hover:shadow-primary-500/60 border-transparent': !secondary,
				},
			)}
		>
			{children}
		</button>
	);
};

export default Button;
